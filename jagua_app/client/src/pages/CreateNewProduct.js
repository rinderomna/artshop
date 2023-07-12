import { useState, useContext, useEffect } from "react"; // Hooks para infos de usuario, efeitos colaterais e estados dos componentes
import { useNavigate } from "react-router-dom"; // Administracao localizacao do usuario no site
import { useForm } from "react-hook-form"; // Administrar formulario de criacao de produto
import { uid } from "uid"; // Lidar com identificacoes de produto
import axios from "axios"; // Requisicoes HTTP
import { StatusContext } from "../App.js"; // Lidar c/ infos de usuario
import PermissionDenied from "../components/PermissionDenied/PermissionDenied.js"; // Checar permissoes para edicao de produto

import "../components/LoginBox/FormStyle.css"; // Estilo de formulario

// Administrando a criacao de um novo produto pro site
const CreateNewProduct = () => {
    const FormData = require('form-data'); // Lidar c/ dados de formulario
    const { status, setStatus } = useContext(StatusContext); // Lidar c/ infos de usuario
    const navigate = useNavigate();

    // Inicializar estados de dados de produto
    const [setProductPrice] = useState("0.00");
    const [setProductStock] = useState("");
    const [setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [setSpecificSize] = useState("");
    const [setProductImage] = useState("");

    // Logica para mostrar o input de tamanho especifico
    const [showSizeInput, setShowSizeInput] = useState(true);
    
    // Hook do formulario
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    // Lista de tamanhos para cada tipo especifico de produto
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

    // Logica para salvar a categoria de produto escolhida
    const handleInputCategory = (selectedOption) =>{
        setProductCategory(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    useEffect(() => {
        if(productCategory){
            console.log("Categoria digitada pelo usuario: " + productCategory);
            setShowSizeInput(productCategory === "sticker");
        }
    },[productCategory]);


    // Funcao assincrona para salvar um produto no banco de dados
    const saveProduct = async (data) => {
        const formData = new FormData();
        
        formData.append("image", data.productimage);
        formData.append("name", data.productname);
        formData.append("slug", uid(20));
        formData.append("price", data.productprice);
        formData.append("description", data.productdescription);
        formData.append("type", data.productcategory);

        console.log("Form Data");
        console.log(formData);

        // Dependendo do tipo de produto escolhido, uma lista de tamanhos deve ser salva
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
      
        sizes.forEach((size, index) => {
          formData.append(`sizes[${index}][name]`, size.name);
          formData.append(`sizes[${index}][specific_size]`, size.specific_size);
        });
      
        formData.append("stock", data.productstock);
        formData.append("sales", 0);
      
        try {
          const response = await axios.post( // Cadastrando produto...
            "http://127.0.0.1:3001/products/",
            formData,
          );
          console.log("Product saved successfully!");
          console.log("Product ID:", response.data);

          setTimeout(() => {
              setStatus((prevStatus) => ({
                ...prevStatus,
                // Flag para sinalizar que um novo produto foi adicionado e, portanto,
                // Sera necessario fazer um get do banco de dados (atualizar o catalogo)
                flagNewProduct: !status.flagNewProduct
              }));
            
          }, 1000);

          
        } catch (error) { // Nao deu certo cadastrar o produto
          console.error("Error saving the product:", error.message);
        }
    };


    // Funcao executada quando o usuario aperta o botao de confirmar 
    const onSubmit = (data) => {
        console.log("Dados do formulario");
        console.log(data);
        saveProduct(data);

        navigate("/"); // Navega para a rota "/" (home)
    };

    return  (
        <>
            {
                (status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ? // Cheque permissoes de tipo de usuario
                    <div className="login-box">
                        <h1>Novo Produto</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="purple-text spaced-text">Descrição do Produto</h2>
                            <label htmlFor="productname">Nome do produto</label>
                            <input
                                type="text" // Nome pro produto
                                id="productname"
                                name="productname"
                                maxLength={40}
                                placeholder="Por exemplo: Print Cogumelo Vermelho"
                                onChange={(e) => setProductPrice(e.target.value)}
                                className={errors.productname ? "error" : ""}
                                {...register("productname", {required: true})}
                            />
                            {errors.productname && ( // Lide c/ erros
                                <span className="error-message">
                                    Preencha o campo Nome do produto
                                </span>
                            )}
                            <label htmlFor="productprice">Preço</label>
                            <input
                                type="number" // Preco do novo produto
                                step="0.01"
                                id="productprice"
                                name="productprice"
                                placeholder="R$ XX,XX"
                                onChange={(e) => setProductPrice(e.target.value)}
                                className={errors.productprice ? "error" : ""}
                                {...register("productprice", { // Armazene info obrigatoria
                                    required: true
                                })}
                            />
                            {errors.productprice && ( // Lide c/ erros
                                <span className="error-message">Preencha o campo Preço</span>
                            )}
                            
                            <label htmlFor="productdescription">Descrição</label>
                            <input
                                type="text" // Descreva o produto
                                id="productdescription"
                                name="productdescription"
                                maxLength={100}
                                placeholder="Por exemplo: Impressão em papel couchê fosco com gramatura 300."
                                onChange={(e) => setProductDescription(e.target.value)}
                                className={errors.productdescription ? "error" : ""}
                                {...register("productdescription", { // Armazene info obrigatoria
                                    required: true
                                })}
                            />
                            {errors.productdescription && ( // Lide c/ erros
                                <span className="error-message">Preencha o campo de Descrição</span>
                            )}

                            <label htmlFor="productcategory">Categoria do produto</label>
                            <select
                                name="productcategory" // Defina produto com uma categoria - camiseta, print ou adesivo
                                id="productcategory"
                                onChange={(e) => handleInputCategory(e.target.value)}
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
       
                            { // Tamanho para produto
                                showSizeInput ? 
                                <input
                                    type="text"
                                    id="specificsize"
                                    name="specificsize"
                                    maxLength={30}
                                    placeholder="Tamanho específico"
                                    onChange={(e) => setSpecificSize(e.target.value)}
                                    {...register("specificsize", {required: false})}
                                />
                                :
                                <>
                                </>
                            }

                            <label htmlFor="productstock">Estoque</label>
                            <input // Estoque
                                type="text"
                                id="productstock"
                                name="productstock"
                                placeholder="Por exemplo: 10"
                                onChange={(e) => setProductStock(e.target.value)}
                                className={errors.productstock ? "error" : ""}
                                {...register("productstock", {required: true})} // Armazene infos obrigatorias
                            />
                            {errors.productstock && ( // Lide c/ possiveis erros e valide pro usuario
                                <span className="error-message">
                                    Preencha o campo Estoque
                                </span>
                            )}

                            <h2 className="purple-text spaced-text">Imagem</h2>
                            <input
                                type="text" // Coloque link para imagem
                                id="productimage"
                                name="productimage"
                                placeholder="URL da imagem"
                                onChange={(e) => setProductImage(e.target.value)}
                                className={errors.productimage ? "error" : ""}
                                {...register("productimage", {required: true})}
                            />
                            {errors.productimage && ( // A imagem eh obrigatoria
                                <span className="error-message">
                                    Adicione uma Imagem
                                </span>
                            )}

                            <button type="submit">OK</button>
                        </form>
                    </div> : // Somente o admin pode criar novos produtos! Exiba uma mensagem semantica ao cliente que tentar fazer isso...
                <PermissionDenied userType="administrador" />
            }
        </>
    );
};

export default CreateNewProduct;