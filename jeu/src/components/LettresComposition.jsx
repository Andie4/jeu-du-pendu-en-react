const LettresComposition = ({mot, selectedLetters }) => {
    return (
        <div className="blocMot">
            {mot.split("").map((letter, index) => (
                <span key={index} className="lettre">
                    {selectedLetters.includes(letter) ? letter : "_"}
                </span>
            ))}
        </div>
    );
    }

export { LettresComposition };
