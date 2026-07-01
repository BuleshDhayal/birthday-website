import "./Hero.css";
import { FaGift } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>🎉 Happy Birthday 🎉</h1>

        <h2>Bulesh ❤️</h2>

        <p>
          Today is all about smiles, happiness and unforgettable memories.
        </p>

         <button
          onClick={() => {
          document
          .getElementById("gallery")
          ?.scrollIntoView({ behavior: "smooth" });
           }}
>
  Open Surprise 🎁
</button>
      
      </div>
    </section>
  );
}

export default Hero;