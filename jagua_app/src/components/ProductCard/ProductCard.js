import BuyButton from '../BuyButton/BuyButton';
import './ProductCard.css';

function ProductCard(props) {
  // -> sizes: array de strings de tamanhos disponíveis. eg.: ['A5', 'A4', 'A3']
  const { image, name, price, sizes } = props;

  return (
      <article className="productCard">
        <div className="imageBox">
          <img src={image} alt={`Imagem para ${name}`} />
        </div>
        <h4 className="productNameOnGrid">{name}</h4>
        <div className="productRuler"></div>
        <p className="productPrice">{`R$ ${price}`}</p>
        <div className="productSize">
          <p>Tamanhos disponíveis:</p>
          {sizes.map((size, index) => (
              <span key={index}>{size}</span>
          ))}
        </div>
        <BuyButton />
      </article>
  );
}

export default ProductCard;