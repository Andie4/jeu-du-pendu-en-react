import React from "react";
import { useState } from "react";

// import { Mot } from "./components/mot.jsx";
// bizarre car sur les autres fichiers mon chemin est sesnsible à la casse lorsqu'il manque une majuscule mais pas ici pour mon "mot.jsx"
import { Generateur } from "./components/Generateur.jsx";
import { FindMot } from "./components/FindMot.jsx";



function App() {
    const [mot, setMot] = useState("");

    return (
        <div>
            <h1>Jeu du pendu</h1>
            <Generateur mot={mot} setMot={setMot}/>
            <FindMot/>
        </div>  

    );
};


export default App
