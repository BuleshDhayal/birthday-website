import { useState } from "react";

import "./App.css";

import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import MusicPlayer from "./components/MusicPlayer";
import Fireworks from "./components/Fireworks";
import Cake from "./components/Cake";
import Stars from "./components/Stars";

function App() {

  const [celebrate, setCelebrate] = useState(false);

  return (
    <>
      <Stars />

      <Hero />

      <Gallery />

      <Letter />

      <Cake onCelebrate={() => setCelebrate(true)} />

      <Fireworks show={celebrate} />

      <MusicPlayer />
    </>
  );
}

export default App;