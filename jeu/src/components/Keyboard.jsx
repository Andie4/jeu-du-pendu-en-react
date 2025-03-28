import React from "react";


const Keyboard = ({alphabet, action }) => {
    console.log(alphabet);

    return (
        <div>
            {alphabet.map(
                (letter, key) => {
                    // console.log(key + "=>" + letter)
                    return (
                        <button 
                            key={"letter_"+ key}
                            onClick={ ()=> action(letter)}
                            >{letter}
                        </button>
                    )
                })
            }
        </div>
    )
};


export default Keyboard;