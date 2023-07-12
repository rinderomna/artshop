import { useContext, useEffect } from 'react';

import { StatusContext } from '../App.js';

import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerNovidades from "../assets/visual_identity/banners/banner_novidades.png";
import AdminHomeBanner from "../components/AdminHomeBanner/AdminHomeBanner.js";

import Catalog from "../components/Catalog/Catalog";

// A home carrega seu banner e todos os catalogos de produtos categorizados. Tambem checa se o 
// usuario esta logado para pequenas mudancas no visual do site
const Home = () => {
    const { status, setStatus } = useContext(StatusContext);

    useEffect(() => {
        if (!status.user) {
            setStatus(
                {
                    ...status,
                    type: "loggedOut"
                }
            );
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <>
            {
                (status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                <AdminHomeBanner /> :
                <HighlightBanner imageSrc={bannerNovidades} altText="novidades" />
            }

            <main className="bodyWrapper">
                <Catalog name="Prints em Papel Couchê" type="printsCatalog" products={status.products.filter((product) => product.type === "print")}/>
                <Catalog name="Adesivos de Vinil" type="stickersCatalog" products={status.products.filter((product) => product.type === "sticker")} />
                <Catalog name="Camisetas" type="shirtsCatalog" products={status.products.filter((product) => product.type === "shirt")} />
            </main>
        </>
    );
};

export default Home;