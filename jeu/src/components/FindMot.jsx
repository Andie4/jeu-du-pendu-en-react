const FindMot = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // Liste des lettres

    return (
        <div>
            <p>Les lettres</p>
            <div>
                {alphabet.map((letter) => (
                    <button key={letter} id={letter.toLowerCase()} className="lettre">
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export { FindMot };
