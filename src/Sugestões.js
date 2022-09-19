export default function Sugestões() {
    const listaSugestoes = [
        { src: "../img/bad-vibes.jpeg", usuario: "bad.vibes.memes", status: "Segue você" },
        { src: "../img/chibirdart.jpg", usuario: "chibirdart", status: "Segue você" },
        { src: "../img/passaro.png", usuario: "razoesparaacreditar", status: "Novo no Instagram" },
        { src: "../img/animais.jpeg", usuario: "adorable_animals", status: "Segue você" },
        { src: "../img/gato.jpeg", usuario: "smallcutecats", status: "Segue você" }
    ];

    return (
        <>
            {listaSugestoes.map(Sugestao)}
        </>
    )
}

function Sugestao(s) {
    return (
        <div class="sugestões">
            <img src={s.src} alt="usuario" />
            <div>
                <div>
                    <p>{s.usuario}</p>
                    <p>{s.status}</p>
                </div>
                <p>Seguir</p>
            </div>
        </div>
    )
}