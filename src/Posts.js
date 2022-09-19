import React from "react";

export default function Posts() {
    const informaçoesDoPost = [
        {
            srcTopo: "../img/Meu_desenho.jpg",
            perfilTopo: "Mypic",
            srcPost: "../img/nappa.jpg",
            srcbaixo: "../img/best.gm.jpeg",
            perfilBaixo: "MintGar",
            gosteis: 1014
        },
        {
            srcTopo: "../img/Fulana.jpg",
            perfilTopo: "Fulana",
            srcPost: "../img/meme.jpg",
            srcbaixo: "../img/tradg_blory.jpg",
            perfilBaixo: "blory",
            gosteis: 12214
        },
        {
            srcTopo: "../img/tradg_blory.jpg",
            perfilTopo: "blory",
            srcPost: "../img/notas-musicais.png",
            srcbaixo: "../img/dev-flow.jpeg",
            perfilBaixo: "Devflow",
            gosteis: 114
        }
    ]

    return (
        <>
            {informaçoesDoPost.map(Post)}
        </>
    )
}

function Post(p) {
    return (
        <div class="conteudo">
            <BarraSuperior imgTopo={p.srcTopo} usuarioTopo={p.perfilTopo} />
            <ImgDoPost_BarraInferior imgPost={p.srcPost} imgBaixo={p.srcbaixo} usuarioBaixo={p.perfilBaixo} curtidas={p.gosteis} />
        </div>
    )
}

function BarraSuperior(props) {
    return (
        <div class="barra-superior">
            <div>
                <img src={props.imgTopo} alt="usuario" />
                <p>{props.usuarioTopo}</p>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}

function ImgDoPost_BarraInferior(props) {

    const [iconePost, setIconePost] = React.useState("bookmark-outline");
    const [curtir, setCurtir] = React.useState("post-normal");
    const [iconeCurtir, setIconeCurtir] = React.useState("heart-outline");
    const [numeroDeCurtidas, setnumeroDeCurtidas] = React.useState(props.curtidas);

    function salvarPost() {

        if (iconePost === "bookmark-outline") {
            setIconePost("bookmark")
        } else {
            setIconePost("bookmark-outline")
        }
    }

    function curtirPost() {

        if (curtir === "post-normal") {
            setIconeCurtir("heart");
            setCurtir("post-curtido")
            setnumeroDeCurtidas(numeroDeCurtidas + 1);

        } else {
            setIconeCurtir("heart-outline");
            setCurtir("post-normal")
            setnumeroDeCurtidas(numeroDeCurtidas - 1);
        }
    }

    return (
        <>
            <img onClick={curtirPost} src={props.imgPost} alt="meme" />
            <div class="barra-inferior">
                <div>
                    <div>
                        <ion-icon class={curtir} onClick={curtirPost} name={iconeCurtir}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon onClick={salvarPost} name={iconePost}></ion-icon>
                </div>
                <div>
                    <img src={props.imgBaixo} alt="usuario" />
                    <p>Curtido por <strong>{props.usuarioBaixo}</strong> e <strong>outras {numeroDeCurtidas} pessoas</strong></p>
                </div>
            </div>
        </>
    )
}