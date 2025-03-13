import { useEffect, useState } from "react";

const Generateur = ({mot ,setMot}) => {
    // affichage du mot

    useEffect(() => {
        fetch("http://localhost:3333", {
            method: "POST",
            lang: "fr"
        })
        .then((response) => response.json())
        .then((data) => setMot(data.word))
    }, []);
    
    console.log(mot.length);



    //création d'un iput pour chaque lettre
    for (let i = 0; i < mot.length; i++) {
        const input = document.createElement("input");

        input.setAttribute("length", "1");
        input.setAttribute("size", "1");
        document.body.appendChild(input);

        console.log(mot[i]);
    }

    
    return (
        <div>
            <h2>Le mot mystère est :</h2>
            <p>{mot}</p>
            <p>{mot.length}</p>
        </div>
    );
};

export {Generateur};
