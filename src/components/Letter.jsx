import { useState } from "react";
import "./Letter.css";

function Letter() {

  const [open, setOpen] = useState(false);

  return (
    <section className="letter-section">

      <h2>💌 A Special Letter</h2>

      {!open ? (

        <div className="envelope" onClick={() => setOpen(true)}>
          ✉️
          <p>Click to Open</p>
        </div>

      ) : (

        <div className="letter-card">

          <h3>Happy Birthday ❤️</h3>

          <p>
            Wishing you endless happiness, success,
            beautiful memories and countless smiles.
            May this year bring everything you dream of.
            Stay happy, stay blessed and keep smiling always. 🎉✨
          </p>

        </div>

      )}

    </section>
  );
}

export default Letter;