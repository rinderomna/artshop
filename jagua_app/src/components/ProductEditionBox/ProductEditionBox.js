import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import { StatusContext } from '../../App.js';
import PermissionDenied from "../PermissionDenied/PermissionDenied.js";

import "../LoginBox/FormStyle.css";

const ProductEditionBox = () => {
    const { status } = useContext(StatusContext);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("0.00");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productSizeCategory, setProductSizeCategory] = useState("");
    const [specificSize, setSpecificSize] = useState("");
    const [productImage, setProductImage] = useState("");
    
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        navigate("/productDetails"); // Navega para a rota "/productDetails" do produto que acabou de ser editado
    };

    return  (
        <>
            {
                (status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                    <div className="login-box">
                        <h1>Editar Produto</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="purple-text spaced-text">Descrição do Produto</h2>
                            <label htmlFor="productname">Nome do produto</label>
                            <input
                                type="text"
                                id="productname"
                                name="productname"
                                maxLength={40}
                                placeholder="Por exemplo: Print Cogumelo Vermelho"
                                onChange={(e) => setProductName(e.target.value)}
                                className={errors.productname ? "error" : ""}
                                {...register("productname", {required: true})}
                            />
                            {errors.productname && (
                                <span className="error-message">
                                    Preencha o campo Nome do produto
                                </span>
                            )}
                            <label htmlFor="productprice">Preço</label>
                            <InputMask
                                mask="R$ 99,99"
                                type="text"
                                id="productprice"
                                name="productprice"
                                placeholder="R$ XX,XX"
                                onChange={(e) => setProductPrice(e.target.value)}
                                className={errors.productprice ? "error" : ""}
                                {...register("productprice", { 
                                    required: true
                                })}
                            />
                            {errors.productprice && (
                                <span className="error-message">Preencha o campo Preço</span>
                            )}
                            
                            <label htmlFor="productdescription">Descrição</label>
                            <input
                                type="text"
                                id="productdescription"
                                name="productdescription"
                                maxLength={100}
                                placeholder="Por exemplo: Impressão em papel couchê fosco com gramatura 300."
                                onChange={(e) => setProductDescription(e.target.value)}
                            />
                            <label htmlFor="productcategory">Categoria do produto</label>
                            <select
                                name="productcategory"
                                id="productcategory"
                                {...register("productcategory", { 
                                    required: true,
                                    validate: (value) => value !== "", // Verifica se o valor é diferente do valor padrão 
                                })}
                            >
                                <option value="" defaultValue>Escolha uma categoria...</option>
                                <option value="adesivo">Adesivo</option>
                                <option value="camiseta">Camiseta</option>
                                <option value="print">Print</option>
                            </select>
                            <h2 className="purple-text spaced-text">Tamanho</h2>
                            <label htmlFor="productsizecategory">Tamanho do produto</label>
                            <select
                                name="productsizecategory"
                                id="productsizecategory"
                                {...register("productsizecategory", { 
                                    required: true,
                                    validate: (value) => value !== "", // Verifica se o valor é diferente do valor padrão 
                                })}
                            >
                                <option value="" defaultValue>Escolha um tamanho de produto...</option>
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
                                maxLength={30}
                                placeholder="Tamanho específico"
                                onChange={(e) => setSpecificSize(e.target.value)}
                            />

                            <h2 className="purple-text spaced-text">Quantidade em Estoque</h2>

                            <h2 className="purple-text spaced-text">Imagem</h2>
                            <label htmlFor="productimage">Arquivo de imagem</label>
                            <h3>&le;Colocar imagem atual do produto aqui&ge;</h3>
                            <input
                                type="file"
                                id="productimage"
                                name="productimage"
                                onChange={(e) => setProductImage(e.target.value)}
                                accept="image/png, image/jpg"
                            />

                            <button type="submit">OK</button>
                        </form>
                    </div> :
                <PermissionDenied userType="administrador" />
            }
        </>
    );
};

export default ProductEditionBox;