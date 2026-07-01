import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Cake.css";

function Cake({ onCelebrate }) {
  const [lit, setLit] = useState(false);
  const [listening, setListening] = useState(false);

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition");
      return;
    }

    resetTranscript();
    setListening(true);

    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });

    setTimeout(() => {
      SpeechRecognition.stopListening();
      setListening(false);

      console.log("Transcript:", transcript);

      if (
        transcript.toLowerCase().includes("bulesh") ||
        transcript.toLowerCase().includes("blow")
      ) {
        setLit(false);

        if (onCelebrate) {
          onCelebrate();
        }
      } else {
        alert("Maine ye suna: " + transcript);
      }
    }, 3000);
  };

  return (
    <section className="cake-section">
      <h2>🎂 Make a Wish</h2>

      <div className="cake">
        <div className="candle">
          {lit && <div className="flame"></div>}
        </div>

        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>

      {!lit ? (
        <button
          className="cake-btn"
          onClick={() => setLit(true)}
        >
          🕯 Light the Candle
        </button>
      ) : (
        <>
          <h3 style={{ marginTop: "30px" }}>
            ✨ Make a Wish ✨
          </h3>

          <button
            className="cake-btn"
            onClick={startListening}
          >
            🎤 Blow into Mic
          </button>

          {listening && (
            <p
              style={{
                marginTop: "20px",
                color: "#ffd166",
                fontSize: "20px",
              }}
            >
              🎤 Speak "Bulesh" or "Blow" into the microphone...
            </p>
          )}
        </>
      )}
    </section>
  );
}

export default Cake;