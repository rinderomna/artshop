import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerPrints from "../assets/visual_identity/banners/banner_prints.png";

import Catalog from "../components/Catalog/Catalog";

import { useContext } from 'react';
import { StatusContext } from '../App.js';


const Prints = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            <HighlightBanner imageSrc={bannerPrints} altText="prints" />
            <main className="bodyWrapper">
                <Catalog name="Prints em Papel Couchê" type="printsCatalog" products={status.products.filter((product) => product.type === "print")}/>
            </main>
        </>
    )
};

export default Prints;