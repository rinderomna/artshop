import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerPrints from "../assets/visual_identity/banners/banner_prints.png";

import Catalog from "../components/Catalog/Catalog";

import printOvelhaNegra from "../assets/visual_identity/prints/print_ovelha.png";
import printBesouro from "../assets/visual_identity/prints/print_besouro.png";
import printFundoDoMar from "../assets/visual_identity/prints/print_concha.png";
import printEspelho from "../assets/visual_identity/prints/print_celular.png";
import printAbducao from "../assets/visual_identity/prints/print_irmas.png";

const Prints = () => {
    const products = [
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

    return (
        <>
            <HighlightBanner imageSrc={bannerPrints} altText="prints" />
            <main className="bodyWrapper">
                <Catalog name="Prints em Papel Couchê" type="printsCatalog" products={products}/>
            </main>
        </>
    )
};

export default Prints;