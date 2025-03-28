import React, { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import Generateur  from "./components/Generateur.jsx";
import Verify from "./components/Verify.jsx";
import gsap from "gsap";


function App() {
    const [mot, setMot] = useState("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const [chance, setChance] = useState(10);
    const [usedLetter, setUsedLetter] = useState([]);
    const [verify, setVerify] = useState("");


    // Fonction pour lancer les confettis avec gsap trouver sur gsap 
     const lancerConfettis = () => {
        const container = document.getElementById("container");
        if (!container) return;

        let total = 50;
        let w = window.innerWidth;
        let h = window.innerHeight;

        for (let i = 0; i < total; i++) {
            let dot = document.createElement("div");
            dot.className = "dot";
            container.appendChild(dot);

            gsap.set(dot, {
                x: Math.random() * w,
                y: Math.random() * -100,
                opacity: 1,
                scale: Math.random() * 0.5 + 0.5,
                backgroundColor: `hsl(${Math.random() * (360 - 170) + 170}, 50%, 50%)`
            });

            gsap.to(dot, {
                y: h,
                duration: Math.random() * 5 + 4,
                ease: "none",
                repeat: -1
            });

            gsap.to(dot, {
                x: "+=70",
                duration: Math.random() * 5 + 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(dot, {
                scaleX: 0.2,
                rotation: Math.random() * 360,
                duration: Math.random() * 5 + 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(dot, {
                opacity: 0,
                duration: Math.random() * 1 + 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    };
    

    const letterSelected = (letter) => {
        console.log("lettre selectionné:"+letter )

        if (!usedLetter.includes(letter)) {
            const newUsedLetters = [...usedLetter, letter];
            setUsedLetter(newUsedLetters);

            // victoire
            if (mot.split("").every(l => newUsedLetters.includes(l))) {
                alert("🎉 Bravo !🎉 Le mot à été trouvé");
                lancerConfettis();


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
        <div className="blocApp">
            <h1>Jeu du pendu</h1>
            <p>Nombre de chance : <strong>{chance}/10</strong> </p>
            <div id="container"></div>

            {verify !== null && <Verify verify={verify}
                usedLetter={usedLetter}/>
            }
            <Generateur mot={mot} setMot={setMot} usedLetter={usedLetter} setVerify={setVerify}  />
            <Keyboard 
                alphabet={alphabet} 
                action = {letterSelected}/>

            <a id="reload" href="window.location.reload()">Changer de mot</a>
        </div>  
    );
}

export default App;
