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
            <Buttons setColorLeft={setColorLeft} setColorRight={setColorRight}/>
            <Gradient colorLeft={colorLeft} colorRight={colorRight}/>
            <Colors colorLeft={colorLeft} colorRight={colorRight}/>
        </div>
    )
}
export default App;