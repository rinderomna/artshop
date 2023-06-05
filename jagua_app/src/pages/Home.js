import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerNovidades from "../assets/visual_identity/banners/banner_novidades.png";
import ProductCard from "../components/ProductCard/ProductCard";

import print from "../assets/visual_identity/prints/print_ovelha.png";

const Home = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerNovidades} altText="novidades" />
            <h1>Home</h1>;
            <ProductCard 
                image={print}
                name="Print Ovelha"
                price="8,50"
                sizes={['A5', 'A4', 'A3']}
            />
        </>
    );
};

export default Home;