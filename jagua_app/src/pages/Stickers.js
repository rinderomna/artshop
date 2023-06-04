import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerAdesivos from "../assets/visual_identity/banners/banner_adesivos.png";
import BodyWrapper from "../components/BodyWrapper/BodyWrapper";

const Stickers = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerAdesivos} altText="adesivos" />
            <BodyWrapper />
            <h1>Tela de adesivos</h1>;
        </>
    );
};

export default Stickers;