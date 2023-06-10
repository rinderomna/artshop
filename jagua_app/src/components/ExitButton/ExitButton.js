import { Link } from "react-router-dom";
import { useContext } from "react";
import { StatusContext } from "../../App.js";
import "./ExitButton.css"; // Importando o arquivo CSS

const ExitButton = ({ callBack }) => {
  const { setStatus } = useContext(StatusContext);

  const handleOnClick = () => {
    setStatus({
      type: "loggedOut",
      user: null,
      currProduct: null,
      cartList: [],
      orders: []
    });

    callBack();
  };

  return (
    <Link to="/" onClick={handleOnClick} className="exit-button"> {/* Aplicando a classe "exit-button" */}
      <h1>Sair</h1>
    </Link>
  );
};

export default ExitButton;
