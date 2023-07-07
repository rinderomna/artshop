import React, { useContext } from "react";
import { StatusContext } from "../../App.js";
import { SlUser } from 'react-icons/sl';

import "./OrdersBanner.css";

const OrdersBanner = () => {
    const { status } = useContext(StatusContext);

    return (
        <div className="centralizeBoard">
            {(status.type === "customerLoggedIn") ? 
                //se for um usuario, deve mostrar a lista filtrada so com os pedidos feitos por 
                //esse usuario 
                <>
                    <div className="user-icon" aria-label="Ícone de usuário">
                        <SlUser size={"4em"} color="var(--purple)" />
                    </div>
                    <h1>Meus Pedidos</h1>
                </>
                :
                //se for o admin, mostra a lista sem filtro
                <>
                    <div className="admin-icon" aria-label="Ícone de usuário">
                        <h1>ADMIN</h1>
                    </div>
                    <h1>Pedidos Totais</h1>
                </>
            }
            
        </div>
    );
};

export default OrdersBanner;