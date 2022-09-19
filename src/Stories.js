export default function Stories() {
    const informaçoesDoStory = [
        { src: "../img/tradg_blory.jpg", perfil: "blory" },
        { src: "../img/9gag_logo.svg.png", perfil: "9gag" },
        { src: "../img/alem-do-infinito.jpeg", perfil: "Infitwo" },
        { src: "../img/best.gm.jpeg", perfil: "MintGar" },
        { src: "../img/dev-flow.jpeg", perfil: "Devflow" },
        { src: "../img/fora-da-caixa.png", perfil: "Fordig" },
        { src: "../img/Fulana.jpg", perfil: "Fulana" },
        { src: "../img/Meu_desenho.jpg", perfil: "Mypic" },
        { src: "../img/segurança-web.jpeg", perfil: "SPage" }
    ]

    return (
        <div class="caixa-stories">
            {informaçoesDoStory.map((s) => <Storie img={s.src} texto={s.perfil} />)}
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}

function Storie(props) {
    return (
        <div class="story">
            <div>
                <img class="imgStory" src={props.img} alt="story" />
            </div>
            <p>{props.texto}</p>
        </div>
    )
}