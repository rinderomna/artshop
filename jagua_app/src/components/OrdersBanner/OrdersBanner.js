import { SlUser } from 'react-icons/sl';

import "./OrdersBanner.css";

const OrdersBanner = () => {
    return (
        <div className="centralizeBoard">
            <div className="user-icon" aria-label="Ícone de usuário">
                <SlUser size={"4em"} color="var(--purple)" />
            </div>
            <h1>Meus Pedidos</h1>
        </div>
    );
};

export default OrdersBanner;