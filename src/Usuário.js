import React from "react";

export default function Usuário(props) {
    const [nome, setNome] = React.useState(props.nome);
    const [foto, setFoto] = React.useState(props.img);

    function mudarNome() {
        const novoNome = prompt("Qual nome você deseja ter?");

        if (novoNome !== "" && novoNome !== null) {
            setNome(novoNome);
        }
    }

    function mudarFoto() {
        const novaFoto = prompt("Coloque abaixo o link de endereço da sua nova foto");

        if (novaFoto !== "" && novaFoto !== null) {
            setFoto(novaFoto);
        }
    }

    return (
        <div class="perfil">
            <img onClick={mudarFoto} src={foto} alt="usuario" />
            <div>
                <p>{props.usuario}</p>
                <span>
                    <p>{nome}</p>
                    <ion-icon onClick={mudarNome} name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
}