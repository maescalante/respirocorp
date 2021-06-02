import React from 'react'
import construction from "./assets/img/construction.png"
import "./css/App.css"
const App = () => {
    return (
        <div >  
            <h1>RespirO<sub>2</sub>Corp</h1>
            <h3>Sitio Web en Construcción </h3>
            <img src={construction} alt="sitio en construcción"/>
        </div>
    )
}

export default App
