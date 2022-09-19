import Usuário from "./Usuário";
import Sugestões from "./Sugestões";

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuário img={"../img/goku.jpg"} usuario={"Kaka.roto"} nome={"Goku"} />
            <div class="indicador">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <Sugestões />
            <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma<br />
                <br />
                © 2021 INSTAGRAM DO FACEBOOK
            </p>
        </div>
    )
}