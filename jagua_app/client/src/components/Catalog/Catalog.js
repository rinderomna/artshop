import "./Catalog.css"; // Estilo

import ProductCard from "../ProductCard/ProductCard.js"; // Carrega varios cartoes de produto para formar catalogo

// Criando catalogos especificos - pode ser de adesivos, de camisetas ou de prints...
function Catalog(props) {
    // products eh um array com os produtos dessa secao
    const { name, type, products } = props;

    // Uso de map para fazer varios cards, um para cada um dos produtos necessarios
    return (
        <>
            <h1>{name}</h1>
            <article className={`allProductsCatalog ${type}`}>
                {products.map((product) => (
                    
                    <ProductCard product={product}/>
                ))}
            </article>
        </>
    );
}

export default Catalog;