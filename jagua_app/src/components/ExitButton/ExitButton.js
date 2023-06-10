import { Link } from "react-router-dom";

import { useContext } from "react";
import { StatusContext } from "../../App.js";

const ExitButton = ({callBack}) => {
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

        callBack();
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