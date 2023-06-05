import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerAdesivos from "../assets/visual_identity/banners/banner_adesivos.png";

const Stickers = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerAdesivos} altText="adesivos" />
            <h1>Tela de adesivos</h1>;
        </>
    );
};

export default Stickers;