import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerCamisetas from "../assets/visual_identity/banners/banner_camisetas_v2_1500px.png";

import Catalog from "../components/Catalog/Catalog";

import camisetaMedusa from "../assets/visual_identity/camisetas/camiseta_medusa.png";
import camisetaCrowd from "../assets/visual_identity/camisetas/camiseta_crowd.png";
import camisetaHorrorVacui from "../assets/visual_identity/camisetas/camiseta_horror_vacui.png";

const Shirts = () => {
    const products = [
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
            <HighlightBanner imageSrc={bannerCamisetas} altText="camisetas" />
            <main className="bodyWrapper">
                <Catalog name="Camisetas" type="shirtsCatalog" products={products} />
            </main>
        </>
    );
};

export default Shirts;