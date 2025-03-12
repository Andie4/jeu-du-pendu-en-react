import { useEffect, useState } from "react";

const Generateur = () => {
    const [mot, setMot] = useState("");

    useEffect(() => {
        fetch("http://localhost:3333", {
            method: "POST",
            FormURLEncoded:{
                "locale": "fr-FR"
            },
            response: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => setMot(data.word))
    }, []);
    

    return (
        <div>
            <h2>Le mot mystère est :</h2>
            <p>{mot}</p>
        </div>
    );
};

export {Generateur};
