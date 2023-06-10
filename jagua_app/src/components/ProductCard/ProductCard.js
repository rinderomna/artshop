import BuyButton from '../BuyButton/BuyButton';
import './ProductCard.css';

function ProductCard({product}) {
  
  return (
      <article className="productCard">
        <div className="imageBox">
          <img src={product.image} alt={`Imagem para ${product.name}`} />
        </div>
        <h4 className="productNameOnGrid">{product.name}</h4>
        <div className="productRuler"></div>
        <p className="productPrice">{`R$ ${product.price}`}</p>
          {
              (product.sizes[0].name === 'Tam. Único')

              //se tiver apenas um tamanho, mostra direto o tamanho especifico
              ? <span className="specific-size"> {product.sizes[0].specific_size}</span>

              //caso tenha varios, mostra o nome das opcoes
              :<div className="productSize">
                  <p>Tamanhos disponíveis:</p>{product.sizes.map((size, index) => (
                      <span className="name-size" key={index}>{size.name}</span>
                  ))}
              </div>
            }
        <BuyButton product={product}/>
      </article>
  );
}

export default ProductCard;