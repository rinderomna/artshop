import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerCamisetas from "../assets/visual_identity/banners/banner_camisetas_v2_1500px.png";

import Catalog from "../components/Catalog/Catalog";

import camisetaMedusa from "../assets/visual_identity/camisetas/camiseta_medusa.png";
import camisetaCrowd from "../assets/visual_identity/camisetas/camiseta_crowd.png";
import camisetaHorrorVacui from "../assets/visual_identity/camisetas/camiseta_horror_vacui.png";

const Shirts = () => {
    const shirtSizes = [
        {
            name: "P",
            specific_size: "Pequeno"
        },
        {
            name: "M",
            specific_size: "Médio"
        },
        {
            name: "G",
            specific_size: "Grande"
        }
    ]
    const shirtsProducts = [
        {
            id: 12,
            image: camisetaMedusa,
            name: "Camiseta Medusa",
            price: "68,00",
            description: "Camiseta 100% algodão estampada usando silk screen.",
            sizes:shirtSizes
        },
        {
            id: 13,
            image: camisetaCrowd,
            name: "Camiseta Crowd",
            price: "68,00",
            description: "Camiseta 100% algodão estampada em silk screen.",
            sizes:shirtSizes
        },
        {
            id: 14,
            image: camisetaHorrorVacui,
            name: "Camiseta Horror Vacui",
            description: "Camiseta composta de 70% poliéster e 30% algodão. Estampada utilizando sublimação.",
            price: "68,00",
            sizes:shirtSizes
        },
    ];

    return (
        <>
            <HighlightBanner imageSrc={bannerCamisetas} altText="camisetas" />
            <main className="bodyWrapper">
                <Catalog name="Camisetas" type="shirtsCatalog" products={shirtsProducts} />
            </main>
        </>
    );
};

export default Shirts;