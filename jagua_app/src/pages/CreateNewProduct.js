import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { StatusContext } from '../App.js';

const CreateNewProduct = () => {
    const { status } = useContext(StatusContext);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("0.00");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productSizeCategory, setProductSizeCategory] = useState("");
    const [specificSize, setSpecificSize] = useState("");
    const [productImage, setProductImage] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/"); // Navega para a rota "/"
    };

    return  (
        <>
            {
                (status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                    <div className="login-box">
                        <h1>Novo Produto</h1>
                        <h2 className="purple-text spaced-text">Descrição do Produto</h2>
                        <form action="" method="GET">
                            <input
                                type="text"
                                id="productname"
                                name="productname"
                                placeholder="Nome do Produto"
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <input
                                type="text"
                                inputMode="decimal"
                                id="productprice"
                                name="productprice"
                                placeholder="Preço"
                                pattern="[0-9]*[.,]?[0-9]{0,2}"
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                            <input
                                type="text"
                                id="productdescription"
                                name="productdescription"
                                placeholder="Descrição"
                                onChange={(e) => setProductDescription(e.target.value)}
                            />
                            <select
                                name="productcategory"
                                id="productcategory"
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                            >
                                <option value="" disabled hidden>Categoria</option>
                                <option value="adesivo">Adesivo</option>
                                <option value="camiseta">Camiseta</option>
                                <option value="chaveiro">Chaveiro</option>
                                <option value="print">Print</option>
                            </select>
                            <h2 className="purple-text spaced-text">Tamanho</h2>
                            <select
                                name="productsizecategory"
                                id="productsizecategory"
                                value={productSizeCategory}
                                onChange={(e) => setProductSizeCategory(e.target.value)}
                            >
                                <option value="" disabled hidden>Categoria de tamanho</option>
                                <option value="p">P</option>
                                <option value="m">M</option>
                                <option value="g">G</option>
                                <option value="singlesize">Tam. Único</option>
                                <option value="a5">A5</option>
                                <option value="a4">A4</option>
                                <option value="a3">A3</option>
                            </select>
                            <input
                                type="text"
                                id="specificsize"
                                name="specificsize"
                                placeholder="Tamanho específico"
                                onChange={(e) => setSpecificSize(e.target.value)}
                            />
                            <h2 className="purple-text spaced-text">Imagem</h2>
                            <input
                                type="text"
                                id="productimage"
                                name="productimage"
                                placeholder="Link para a imagem"
                                onChange={(e) => setProductImage(e.target.value)}
                                // accept="image/png, image/jpg"
                            />

                            <button type="submit" onClick={handleSubmit}>OK</button>
                        </form>
                    </div> :
                <h1>Acesso de administrador negado</h1>
            }
        </>
    );
};

export default CreateNewProduct;