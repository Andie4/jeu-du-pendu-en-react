import { useEffect } from "react";

const Generateur = ({mot ,setMot}) => {
    // affichage du mot

    useEffect(() => {
        fetch("http://localhost:3333", {
            method: "POST",
            body:new URLSearchParams({locale:"fr-FR"})
        })
        .then((response) => response.json())
        .then((data) => setMot(data.word))
    }, []);
    
    // console.log(mot.length);



    //création d'un iput pour chaque lettre
    for (let i = 0; i < mot.length; i++) {
        const input = document.createElement("input");
        input.setAttribute("maxlength", "1");



        // input.setAttribute("length", "1");
        // input.setAttribute("size", "1");
        // document.body.appendChild(input);

        // console.log(mot[i]);
    } 

    const contientTiret = mot.includes("-");

    return (
        <div>
            <h2>Le mot mystère est :</h2>
            <p>{mot}</p>
            <p>{mot.length}</p>
            <span className="blocMot">
                {mot.split("").map((letter, index) => (
                    letter === "-" ? <span key={index}>-</span> :
                <input key={index} maxlength="X"/>
                ))}
            </span>
        </div>
    );
};

export {Generateur};
