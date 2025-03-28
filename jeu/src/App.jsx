import React, { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import { Generateur } from "./components/Generateur.jsx";
import Verify from "./components/Verify.jsx";

function App() {
    const [mot, setMot] = useState("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const [chance, setChance] = useState(10);
    const [usedLetter, setUsedLetter] = useState([]);
    const [verify, setVerify] = useState("");


    const letterSelected = (letter) => {
        console.log("lettre selectionné:"+letter )

        if (!usedLetter.includes(letter)) {
            const newUsedLetters = [...usedLetter, letter];
            setUsedLetter(newUsedLetters);

            // victoire
            if (mot.split("").every(l => newUsedLetters.includes(l))) {
                alert("🎉 Bravo !🎉 Le mot à été trouvé");
                return;

            }


        } else {
            console.log("lettre déjà utilisé");
        }

        // nbr de chance 
        if (!mot.includes(letter)) {
            setChance(chance - 1);

            if (chance === 1) {
                alert("❌ Perdu ! ❌ la page va se recharger");
                location.reload();
            }
        }



    }

    return (
        <div>
            <h1>Jeu du pendu</h1>
            <p>Nombre de chance : {chance}</p>

            {verify !== null && <Verify verify={verify}
                usedLetter={usedLetter}/>
            }
            <Generateur mot={mot} setMot={setMot} usedLetter={usedLetter} setVerify={setVerify}  />
            <Keyboard 
                alphabet={alphabet} 
                action = {letterSelected}/>
        </div>  
    );
}

export default App;
