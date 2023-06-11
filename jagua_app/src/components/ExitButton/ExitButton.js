import { Link } from "react-router-dom";
import { useContext } from "react";
import { StatusContext } from "../../App.js";
import "./ExitButton.css"; // Importando o arquivo CSS

const ExitButton = ({ callBack }) => {
  const { setStatus } = useContext(StatusContext);

    //testando alteracoes
    const handleOnClick = () => {
        //mudanca -> nao setar orders para null (ainda nao funciona)
        setStatus((prevStatus) =>({
            ...prevStatus,
            type: "loggedOut",
            user: null,
            currProduct: null,
            cartList: []
        }));

    callBack();
  };

  return (
    <Link to="/" onClick={handleOnClick} className="exit-button"> {/* Aplicando a classe "exit-button" */}
      <h1>Sair</h1>
    </Link>
  );
};

export default ExitButton;
