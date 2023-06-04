import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerPrints from "../assets/visual_identity/banners/banner_prints.png";
import BodyWrapper from "../components/BodyWrapper/BodyWrapper";


const Prints = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerPrints} altText="prints" />
            <BodyWrapper />
            <h1>Tela de prints</h1>;
        </>
    )
};

export default Prints;