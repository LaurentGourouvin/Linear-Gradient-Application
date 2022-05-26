// Import Modules
import { useState } from 'react'

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

    return (
        <div className='App'>
            <p>Application Gradient</p>
            <p>Petite application en REACT permettant de créer des petits dégradés CSS.</p>
            <p>Objectif: s'entrainer à l'utilisation des props et modification du state.</p>
            <Buttons setColorLeft={setColorLeft} setColorRight={setColorRight}/>
            <Gradient colorLeft={colorLeft} colorRight={colorRight}/>
            <Colors colorLeft={colorLeft} colorRight={colorRight}/>
        </div>
    )
}
export default App;