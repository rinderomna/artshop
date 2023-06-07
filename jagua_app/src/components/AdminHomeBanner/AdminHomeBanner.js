import { Link } from "react-router-dom";

import "./AdminHomeBanner.css";

const AdminHomeBanner = () => {
    return (
        <div className="centralizeBoard">
            <h1>Área do Administrador</h1>
            <Link to="createNewProduct" className="createProductButton">Novo Item</Link>
        </div>
    );
};

export default AdminHomeBanner;