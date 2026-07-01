import Confetti from "react-confetti";

function Fireworks({show}){

if(!show) return null;

return(

<Confetti

recycle={false}

numberOfPieces={600}

/>

);

}

export default Fireworks;