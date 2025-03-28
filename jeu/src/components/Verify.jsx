import React from "react";


const Verify = ({verify, usedLetter}) => {

    return (
        <div>
            {verify.split("").map((letter, key) => {
                let status = "finded";

                //_1 pour chaque lettres cliqués manquante dans le mot
                if (!usedLetter.includes(letter)) {
                    status = "hidden";
                }

                return( 
                    
                    <span 
                        key={"letter" + key} 
                        className={status}>
                        {usedLetter.includes(letter) ? letter : "_"}
                    </span>)
                   
                }
                )
            }
        </div>
    )
};


export default Verify;