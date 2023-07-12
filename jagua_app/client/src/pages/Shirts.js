import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerCamisetas from "../assets/visual_identity/banners/banner_camisetas_v2_1500px.png";

import Catalog from "../components/Catalog/Catalog";

import { useContext } from 'react';
import { StatusContext } from '../App.js';

// Pagina de camisetas, carregando banner e catalogo de produtos so com camisetas
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