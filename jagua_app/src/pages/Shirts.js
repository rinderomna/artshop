import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerCamisetas from "../assets/visual_identity/banners/banner_camisetas_v2_1500px.png";

const Shirts = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerCamisetas} altText="camisetas" />
            <h1>Tela de camisetas</h1>;
        </>
    );
};

export default Shirts;