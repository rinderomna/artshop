import HighlightBanner from "../components/HighlightBanner/HighlightBanner"; // Carregar banner de pagina
import bannerPrints from "../assets/visual_identity/banners/banner_prints.png"; // Imagem de banner de prints

import Catalog from "../components/Catalog/Catalog"; // Fazer catalogo de prints

import { useContext } from 'react'; // Hook para infos de usuario
import { StatusContext } from '../App.js';

// Carregar produtos que sao prints nesta pagina, com o banner e o catalogo
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