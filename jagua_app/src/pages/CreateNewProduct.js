import { useNavigate } from "react-router-dom";

const CreateNewProduct = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/"); // Navega para a rota "/"
    };

    return  (
        <div className="login-box">
            <h1>Novo Produto</h1>
            <h2 className="purple-text spaced-text">Descrição do Produto</h2>
            <form action="" method="GET">
                <input
                    type="text"
                    id="productname"
                    name="productname"
                    placeholder="Nome do Produto"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="productprice"
                    name="productprice"
                    placeholder="Preço"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="productdescription"
                    name="productdescription"
                    placeholder="Descrição"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="cellphone"
                    name="cellphone"
                    placeholder="Telefone Celular"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <h2 className="purple-text spaced-text">Endereço</h2>
                <select
                    name="productcategory"
                    id="productcategory"
                >
                    <option value="" disabled selected hidden>Categoria</option>
                    <option value="adesivo">Adesivo</option>
                    <option value="camiseta">Camiseta</option>
                    <option value="chaveiro">Chaveiro</option>
                    <option value="print">Print</option>
                </select>
                <h2 className="purple-text spaced-text">Tamanho</h2>
                <select
                    name="productsizecategory"
                    id="productsizecategory"
                >
                    <option value="" disabled selected hidden>Categoria de tamanho</option>
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
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <h2 className="purple-text spaced-text">Imagem</h2>
                <input
                    type="file"
                    id="productimage"
                    name="productimage"
                    accept="image/png, image/jpg"
                    //onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={handleSubmit}>OK</button>
            </form>
        </div>
    );
};

export default CreateNewProduct;