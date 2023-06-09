import "./Catalog.css";

import ProductCard from "../ProductCard/ProductCard.js";

function Catalog(props) {
    // products eh um array com os produtos dessa secao
    const { name, type, products } = props;

    return (
        <>
            <h1>{name}</h1>
            <article className={`allProductsCatalog ${type}`}>
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        sizes={product.sizes}
                    />
                ))}
            </article>
        </>
    );
}

export default Catalog;