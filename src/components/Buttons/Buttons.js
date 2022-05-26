import './Buttons.css'

import { randomHexColor } from "../../utils/randomColor";
function Buttons({setColorLeft, setColorRight}){

    const handleClickLeftColor = () => {
        setColorLeft(randomHexColor);
    }
    const handleClickRightColor = () => {
        setColorRight(randomHexColor);
    }
    return (
        <div className="Buttons">
            <button type="button" onClick={handleClickLeftColor}>Première couleur</button>
            <button type="button" onClick={handleClickRightColor}>Deuxième couleur</button>
        </div>
    )
}

export default Buttons;