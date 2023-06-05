import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerNovidades from "../assets/visual_identity/banners/banner_novidades.png";

const Home = () => {
    return (
        <>
            <HighlightBanner imageSrc={bannerNovidades} altText="novidades" />
            <h1>Home</h1>;
        </>
    );
};

export default Home;