import BuyButton from '../BuyButton/BuyButton';
import './ProductCard.css';

function ProductCard(props) {
  // -> sizes: objeto com campo 'name' com strings de tamanhos disponíveis. eg.: ['A5', 'A4', 'A3']
  const { image, name, description, price, sizes } = props;

  return (
      <article className="productCard">
        <div className="imageBox">
          <img src={image} alt={`Imagem para ${name}`} />
        </div>
        <h4 className="productNameOnGrid">{name}</h4>
        <div className="productRuler"></div>
        <p className="productPrice">{`R$ ${price}`}</p>
          {
              (sizes[0].name === 'Tam. Único')

              //se tiver apenas um tamanho, mostra direto o tamanho especifico
              ? <span className="specific-size"> {sizes[0].specific_size}</span>

              //caso tenha varios, mostra o nome das opcoes
              :<div className="productSize">
                  <p>Tamanhos disponíveis:</p>{sizes.map((size, index) => (
                      <span className="name-size" key={index}>{size.name}</span>
                  ))}
              </div>
            }
        <BuyButton 
            image={image}
            name= {name}
            description={description}
            price={price}
            sizes={sizes} 
        />
      </article>
  );
}

export default ProductCard;