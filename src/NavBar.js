export default function NavBar() {
    return (
        <div class="barra-topo-geral">
            <NavBarDoTopo />
            <NavBarDoTopoMobile />
            <NavBarDeBaixoMobile />
        </div>
    )
}

function NavBarDoTopo() {
    return (
        <div class="barra-topo">
            <div>
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="borda"></div>
                <img src="../img/logo.png" alt="logo" />
            </div>
            <div class="caixa-pesquisar">
                Pesquisar
            </div>
            <div>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

function NavBarDoTopoMobile() {
    return (
        <div class="barra-topo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="../img/logo.png" alt="logo do Instagram" />
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}

function NavBarDeBaixoMobile() {
    return (
        <div class="barra-baixo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}