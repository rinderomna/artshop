import { Link } from "react-router-dom";
import { useContext } from "react";
import { StatusContext } from "../../App.js";
import "./ExitButton.css"; // Importando o arquivo CSS

const ExitButton = ({ callBack }) => {
  const { setStatus } = useContext(StatusContext);

    const handleOnClick = () => {
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
    <Link to="/" onClick={handleOnClick} className="exit-button">
      Sair
    </Link>
  );
};

export default ExitButton;
