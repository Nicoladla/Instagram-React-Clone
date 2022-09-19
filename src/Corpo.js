import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo() {
    return (
        <div class="toda-pagina">
            <div class="storie-conteudo">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}