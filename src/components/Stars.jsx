import "./Stars.css";

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 80 }).map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        ></span>
      ))}
    </div>
  );
}

export default Stars;