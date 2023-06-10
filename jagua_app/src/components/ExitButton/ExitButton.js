import { Link } from "react-router-dom";

import { useContext } from "react";
import { StatusContext } from "../../App.js";

const ExitButton = () => {
    const {
        setStatus
    } = useContext(StatusContext);

    const handleOnClick = () => {
        setStatus({
            type: "loggedOut",
            user: null,
            currProduct: null,
            cartList: [],
            orders: []
        });
    };

    return (
        <Link 
            to="/"
            onClick={handleOnClick}
        >
            <h1>x</h1>
        </Link>
    );
};

export default ExitButton;