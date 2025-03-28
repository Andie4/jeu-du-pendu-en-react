import React, { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import { Generateur } from "./components/Generateur.jsx";

function App() {
    const [mot, setMot] = useState("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


    const letterSelected = (letter) => {
        console.log("lettre selectionné:"+letter )
    }

    return (
        <div>
            <h1>Jeu du pendu</h1>
            <Generateur mot={mot} setMot={setMot} />
            <Keyboard 
                alphabet={alphabet} 
                action = {letterSelected}/>
        </div>  
    );
}

export default App;
