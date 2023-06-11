import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerCamisetas from "../assets/visual_identity/banners/banner_camisetas_v2_1500px.png";

import Catalog from "../components/Catalog/Catalog";

import camisetaMedusa from "../assets/visual_identity/camisetas/camiseta_medusa.png";
import camisetaCrowd from "../assets/visual_identity/camisetas/camiseta_crowd.png";
import camisetaHorrorVacui from "../assets/visual_identity/camisetas/camiseta_horror_vacui.png";

import { useContext } from 'react';
import { StatusContext } from '../App.js';

const Shirts = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            <HighlightBanner imageSrc={bannerCamisetas} altText="camisetas" />
            <main className="bodyWrapper">
                <Catalog name="Camisetas" type="shirtsCatalog" products={status.products.filter((product) => product.type === "shirt")} />
            </main>
        </>
    );
};

export default Shirts;