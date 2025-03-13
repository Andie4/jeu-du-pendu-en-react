import React from "react";
// import { Mot } from "./components/mot.jsx";
// bizarre car sur les autres fichiers mon chemin est sesnsible à la casse lorsqu'il manque une majuscule mais pas ici pour mon "mot.jsx"
import { Generateur } from "./components/Generateur.jsx";



function App() {
    const [mot, setMot] = useState("");

    return (
        <div>
            <h1>Jeu du pendu</h1>
            <Generateur mot={mot} setMot={setMot}/>
        </div>  

    );
};


export default App
