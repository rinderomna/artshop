import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerAdesivos from "../assets/visual_identity/banners/banner_adesivos.png";

import Catalog from "../components/Catalog/Catalog";

import adesivoArcoIris from "../assets/visual_identity/adesivos/adesivo_arco_iris.png";
import adesivoRa from "../assets/visual_identity/adesivos/adesivo_sapo.png";
import adesivoVasoAzul from "../assets/visual_identity/adesivos/adesivo_planta.png";
import adesivoCoracao from "../assets/visual_identity/adesivos/adesivo_cabelo_coracao.png";
import adesivoBesouroPreto from "../assets/visual_identity/adesivos/adesivo_besouro_preto.png";
import adesivoBesouro from "../assets/visual_identity/adesivos/adesivo_besouro.png";

const Stickers = () => {
    const products = [
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

    return (
        <>
            <HighlightBanner imageSrc={bannerAdesivos} altText="adesivos" />
            <main className="bodyWrapper">
                <Catalog name="Adesivos de Vinil" type="stickersCatalog" products={products} />
            </main>
        </>
    );
};

export default Stickers;