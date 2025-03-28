import { useEffect } from "react";

const Generateur = ({mot ,setMot, usedLetter}) => {
    
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

    

    return (
        <div>
            <h2>Le mot mystère est :</h2>
            <p>{mot.length} lettres</p>
            <span className="spanMot">
                {mot.split("").map((letter, index) => {
                    // si la lettre n'a pas été devinée afficher"_ ""
                    return letter === "-" ? (
                        <span key={index}>-</span>
                    ) : (
                        <span key={index}>
                            {usedLetter.includes(letter) ? letter : "_"}
                        </span>
                    );
                })}
            </span>

        </div>
    );
};

export default Generateur;
