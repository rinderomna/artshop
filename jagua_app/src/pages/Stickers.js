import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerAdesivos from "../assets/visual_identity/banners/banner_adesivos.png";

import Catalog from "../components/Catalog/Catalog";

import { useContext } from 'react';
import { StatusContext } from '../App.js';


const Stickers = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            <HighlightBanner imageSrc={bannerAdesivos} altText="adesivos" />
            <main className="bodyWrapper">
                <Catalog name="Adesivos de Vinil" type="stickersCatalog" products={status.products.filter((product) => product.type === "sticker")} />
            </main>
        </>
    );
};

export default Stickers;