import './gradient.css';

function Gradient({colorLeft, colorRight}){
    const linearStyle = {
        background: `linear-gradient(90deg,${colorLeft},${colorRight})`
    }
    console.log(linearStyle)
    return (
        <div className="Gradient" style={linearStyle}></div>
    )
}

export default Gradient;