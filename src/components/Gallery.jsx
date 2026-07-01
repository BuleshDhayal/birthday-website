import { useState } from "react";
import "./Gallery.css";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">

      <h2>📸 Our Beautiful Memories</h2>

      <div className="gallery-grid">

        {photos.map((img, index) => (

          <div
            className="photo-card"
            key={index}
            onClick={() => setSelectedImage(img)}
          >

            <img src={img} alt="" />

          </div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="popup"
          onClick={() => setSelectedImage(null)}
        >

          <img src={selectedImage} alt="" />

        </div>

      )}

    </section>
  );
}

export default Gallery;