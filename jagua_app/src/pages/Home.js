import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerNovidades from "../assets/visual_identity/banners/banner_novidades.png";
import BodyWrapper from "../components/BodyWrapper/BodyWrapper";


const Home = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerNovidades} altText="novidades" />
            <BodyWrapper />
            <h1>Home</h1>;
        </>
    );
};

export default Home;