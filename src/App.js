import React from 'react'
import construction from "./assets/img/construction.png"
import {Row, Col} from "react-bootstrap"
import "./css/App.css"
const App = () => {
    return (
        <div >  
            <h1>Corporación RespirO<sub>2</sub> de Colombia</h1>
            <h3>Sitio Web en Construcción </h3>
            <img src={construction} alt="sitio en construcción"/>
        </div>
    )
}

export default App
