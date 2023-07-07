import React from 'react'

function Order({productList}) {
    return (
        <div>
            {productList.map((product, index) => (
                <div className="item-container" key={product.id}>
                    <img src={product.image} className="img-product" alt={`Imagem para ${product.name}`} />

                    <div className="item-info-container">
                        <p className="product-name">{product.name}</p>
                        <p className="product-details">Quantidade: {product.qtd}</p>
                        <p className="product-details">Tamanho: {product.size_name}</p>
                        <p className="product-price">R$ {parseFloat(product.price)*parseFloat(product.qtd)}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Order;