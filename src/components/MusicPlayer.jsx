import { useRef, useState } from "react";
import song from "../assets/music/birthday.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "15px 25px",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          background: "#ff4d8d",
          color: "#fff",
          fontSize: "16px",
          zIndex: 9999,
          boxShadow: "0 10px 25px rgba(0,0,0,.3)"
        }}
      >
        {playing ? "⏸ Pause Music" : "🎵 Play Music"}
      </button>
    </>
  );
}

export default MusicPlayer;