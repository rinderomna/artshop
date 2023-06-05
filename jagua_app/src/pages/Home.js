import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerNovidades from "../assets/visual_identity/banners/banner_novidades.png";

import Catalog from "../components/Catalog/Catalog";

// Depois isto estara em um JSON para simularmos dados armazenados no BD...
// Colocando os dados aqui no momento para verificar verossimilhanca em relacao aos mockups
import printOvelhaNegra from "../assets/visual_identity/prints/print_ovelha.png";
import printBesouro from "../assets/visual_identity/prints/print_besouro.png";
import printFundoDoMar from "../assets/visual_identity/prints/print_concha.png";
import printEspelho from "../assets/visual_identity/prints/print_celular.png";
import printAbducao from "../assets/visual_identity/prints/print_irmas.png";

import adesivoArcoIris from "../assets/visual_identity/adesivos/adesivo_arco_iris.png";
import adesivoRa from "../assets/visual_identity/adesivos/adesivo_sapo.png";
import adesivoVasoAzul from "../assets/visual_identity/adesivos/adesivo_planta.png";
import adesivoCoracao from "../assets/visual_identity/adesivos/adesivo_cabelo_coracao.png";
import adesivoBesouroPreto from "../assets/visual_identity/adesivos/adesivo_besouro_preto.png";
import adesivoBesouro from "../assets/visual_identity/adesivos/adesivo_besouro.png";

import camisetaMedusa from "../assets/visual_identity/camisetas/camiseta_medusa.png";
import camisetaCrowd from "../assets/visual_identity/camisetas/camiseta_crowd.png";
import camisetaHorrorVacui from "../assets/visual_identity/camisetas/camiseta_horror_vacui.png";

const Home = () => {
    const printsProducts = [
        {
            id: 7,
            image: printOvelhaNegra,
            name: "Print Ovelha Negra",
            price: "8,50",
            sizes: ["A5", "A4", "A3"]
        },
        {
            id: 8,
            image: printBesouro,
            name: "Print Besouro",
            price: "8,50",
            sizes: ["A5", "A4", "A3"]
        },
        {
            id: 9,
            image: printFundoDoMar,
            name: "Print Fundo do Mar",
            price: "8,50",
            sizes: ["A5", "A4", "A3"]
        },
        {
            id: 10,
            image: printEspelho,
            name: "Print Espelho",
            price: "8,50",
            sizes: ["A5", "A4", "A3"]
        },
        {
            id: 11,
            image: printAbducao,
            name: "Print Abdução",
            price: "8,50",
            sizes: ["A5", "A4", "A3"]
        }
    ];

    const stickersProducts = [
        {
            id: 1,
            image: adesivoArcoIris,
            name: "Adesivo Arco-íris",
            price: "2,90",
            sizes: ["P", "M", "G"]
        },
        {
            id: 2,
            image: adesivoRa,
            name: "Adesivo Rã",
            price: "2,90",
            sizes: ["P", "M", "G"]
        },
        {
            id: 3,
            image: adesivoVasoAzul,
            name: "Adesivo Vaso Azul",
            price: "2,90",
            sizes: ["P", "M", "G"]
        },
        {
            id: 4,
            image: adesivoCoracao,
            name: "Adesivo Coração",
            price: "2,90",
            sizes: ["P", "M", "G"]
        },
        {
            id: 5,
            image: adesivoBesouroPreto,
            name: "Adesivo Besouro Preto",
            price: "2,90",
            sizes: ["P", "M", "G"]
        },
        {
            id: 6,
            image: adesivoBesouro,
            name: "Adesivo Besouro",
            price: "2,90",
            sizes: ["P", "M", "G"]
        }
    ];

    const shirtsProducts = [
        {
            id: 12,
            image: camisetaMedusa,
            name: "Camiseta Medusa",
            price: "68,00",
            sizes: ["P", "M", "G"]
        },
        {
            id: 13,
            image: camisetaCrowd,
            name: "Camiseta Crowd",
            price: "68,00",
            sizes: ["P", "M", "G"]
        },
        {
            id: 14,
            image: camisetaHorrorVacui,
            name: "Camiseta Horror Vacui",
            price: "68,00",
            sizes: ["P", "M", "G"]
        },
    ];

    return (
        <>
            <HighlightBanner imageSrc={bannerNovidades} altText="novidades" />
            <main className="bodyWrapper">
                <Catalog name="Prints em Papel Couchê" type="printsCatalog" products={printsProducts}/>
                <Catalog name="Adesivos de Vinil" type="stickersCatalog" products={stickersProducts} />
                <Catalog name="Camisetas" type="shirtsCatalog" products={shirtsProducts} />
            </main>
        </>
    );
};

export default Home;