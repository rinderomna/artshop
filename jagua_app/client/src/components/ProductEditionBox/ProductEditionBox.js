import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { uid } from "uid";
import axios from "axios";
import { StatusContext } from '../../App.js';
import PermissionDenied from "../PermissionDenied/PermissionDenied.js";

import { Link } from 'react-router-dom';

import "../LoginBox/FormStyle.css";

const ProductEditionBox = () => {
    const { status, setStatus } = useContext(StatusContext);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("0.00");
    const [productDescription, setProductDescription] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productSizeCategory, setProductSizeCategory] = useState("");
    const [specificSize, setSpecificSize] = useState("");
    const [productImage, setProductImage] = useState("");
    
    const navigate = useNavigate();
    // Adicione esta linha para definir os valores iniciais dos campos
    const defaultValues = {
        productimage: status.currProduct.image,
        productname: status.currProduct.name,
        productprice: status.currProduct.price,
        productdescription: status.currProduct.description,
        productcategory: status.currProduct.type,
        
    };
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ defaultValues });

    const printsSizes = [
        {
          name: "A5",
          specific_size: "27cm x 10cm",
        },
        {
          name: "A4",
          specific_size: "27cm x 20cm",
        },
        {
          name: "A3",
          specific_size: "27cm x 30cm",
        },
      ];
      
      const stickerSizes = [
        {
          name: "Tam. Único",
          specific_size: "2cm x 3,5cm",
        },
      ];
      
      const shirtSizes = [
        {
          name: "P",
          specific_size: "Pequeno",
        },
        {
          name: "M",
          specific_size: "Médio",
        },
        {
          name: "G",
          specific_size: "Grande",
        },
    ];

    const updateProduct = async (product) => {
        try {
        const response = await axios.put(
            `http://127.0.0.1:3001/products/slug/${product.slug}`,
            product
        );
        console.log("Product updated successfully!");
        setTimeout(() => {
            setStatus((prevStatus) => ({
              ...prevStatus,
              //flag para sinalizar que um novo produto foi adicionado e, portanto,
              //sera necessario fazer um get do banco de dados (atualizar o catalogo)
              flagNewProduct: !status.flagNewProduct
            }));
          
        }, 500);
        } catch (error) {
        console.error("Error updating the product:", error.message);
        }
      };
    
      const onSubmit = (data) => {

        let sizes = [];
        if(data.productcategory === "print"){
            sizes = printsSizes;
        }else if(data.productcategory === "sticker"){
            stickerSizes[0] = {
                ...stickerSizes[0],
                specific_size: data.specificsize
            }
            sizes = stickerSizes;
        }else{
            sizes = shirtSizes;
        }

        const newProductData = {
            ...status.currProduct,
            image: data.productimage,
            name: data.productname,
            price: data.productprice,
            description: data.productdescription,
            type: data.productcategory,
            stock: data.productstock,
            sizes: sizes
          };

          setStatus({   
              ...status,
              currProduct: newProductData
          });

        updateProduct(newProductData);
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
                                placeholder={status.currProduct.name}
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
                            <input
                                type="number"
                                step="0.01"
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
                                placeholder={status.currProduct.description}
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
                                <option value="sticker">Adesivo</option>
                                <option value="shirt">Camiseta</option>
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
                                {...register("specificsize", {required: false})}
                            />

                            <label htmlFor="productstock">Quantidade em Estoque</label>
                            <input
                                type="text"
                                id="productstock"
                                name="productstock"
                                placeholder={status.currProduct.stock}
                                onChange={(e) => setProductStock(e.target.value)}
                                className={errors.productstock ? "error" : ""}
                                {...register("productstock", {required: true})}
                            />
                            {errors.productstock && (
                                <span className="error-message">
                                    Preencha o campo Estoque
                                </span>
                            )}

                            <h2 className="purple-text spaced-text">Imagem</h2>
                            <label htmlFor="productimage">Arquivo de imagem</label>
                            <h3><img width="200px" src={status.currProduct.image}/></h3>
                            <input
                                type="text"
                                id="productimage"
                                name="productimage"
                                placeholder="URL da imagem"
                                onChange={(e) => setProductImage(e.target.value)}
                                className={errors.productimage ? "error" : ""}
                                {...register("productimage", {required: true})}
                            />
                            {errors.productimage && (
                                <span className="error-message">
                                    Adicione uma Imagem
                                </span>
                            )}

                            <button type="submit">Confirmar</button>

    
                        </form>
                    </div> :
                <PermissionDenied userType="administrador" />
            }
        </>
    );
};

export default ProductEditionBox;