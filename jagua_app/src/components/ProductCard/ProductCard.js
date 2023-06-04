import BuyButton from '../BuyButton/BuyButton';
import './ProductCard.css';

// props:
// -> image
// -> name
// -> price
// -> sizes: array de strings de tamanhos disponíveis. eg.: ['A5', 'A4', 'A3']
function ProductCard(props) {
    return (
        <article class="productCard">
          <div class="imageBox">
            <img src={props.image} alt={`Imagem para ${props.name}`} />
          </div>
          <h4 class="productNameOnGrid">{props.name}</h4>
          <div class="productRuler"></div>
          <p class="productPrice">{`R$ ${props.price}`}</p>
          <div class="productSize">
            <p>Tamanhos disponíveis:</p>
            {props.sizes.map((size, index) => (
                <span>{size}</span>
            ))}
          </div>
          <BuyButton />
        </article>
    );
}

export default ProductCard;