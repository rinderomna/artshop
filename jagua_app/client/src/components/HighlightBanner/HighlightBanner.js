import "./HighlightBanner.css";

function HighlightBanner(props) {
    const { imageSrc, altText } = props;

    return (
        <section className="ProductHighlight">
            <img 
                className="ProductImg" 
                src={imageSrc} 
                alt={`Banner sobre ${altText}`}
            />
        </section>
    );
}

export default HighlightBanner;