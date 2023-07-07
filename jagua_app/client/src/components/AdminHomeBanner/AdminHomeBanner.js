import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

import "./AdminHomeBanner.css";

const AdminHomeBanner = () => {
    return (
        <div className="centralizeBoard">
            <h1>Área do Administrador</h1>
            <Link to="createNewProduct" className="createProductButton">
                <span className="createProductButtonIcon">
                    <BsPlusCircle size={"3em"} color="#fff" />
                </span>
                <span className="createProductButtonText">Novo Item</span>
            </Link>
        </div>
    );
};

export default AdminHomeBanner;