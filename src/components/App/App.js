// Import Modules
import { useState, useEffect } from 'react'

// Import Own Modules
import { randomHexColor } from '../../utils/randomColor'

// Import Components
import Buttons from '../Buttons/Buttons'
import Gradient from '../Gradient/Gradient'
import Colors from '../Colors/Colors'
import './App.css'

function App(){
    const [colorLeft, setColorLeft] = useState(randomHexColor());
    const [colorRight, setColorRight] = useState(randomHexColor());

    useEffect(() => {
        console.log("mise à jour du composant")
        console.log("left color: ", colorLeft)
        console.log("right color: ", colorRight)
    })
    return (
        <div className='App'>
            <p>Application Gradient</p>
            <Buttons setColorLeft={setColorLeft} setColorRight={setColorRight}/>
            <Gradient colorLeft={colorLeft} colorRight={colorRight}/>
            <Colors colorLeft={colorLeft} colorRight={colorRight}/>
        </div>
    )
}
export default App;