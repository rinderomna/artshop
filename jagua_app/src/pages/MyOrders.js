import React, { useContext } from "react";
import { StatusContext } from "../App.js";
import OrdersBanner from "../components/OrdersBanner/OrdersBanner";
import OrdersList from "../components/OrdersList/OrdersList"
import NoOrders from "../components/NoOrders/NoOrders.js";
const MyOrders = () => {

    const { status } = useContext(StatusContext);

    //para nenhum pedido ser filtrado
    let filt_condition = null;
    if(status.type === "customerLoggedIn"){
        filt_condition = status.user.userName;
    }

    let filtered_list = null;
    if (status.orders != null){
        filtered_list =  status.orders.filter((order) => order.buyer.user_name === filt_condition);
    }
    
    return (
        <>
            <OrdersBanner />
            
            {(filtered_list != null) ? 
            
                (status.type === "customerLoggedIn") ? 
                    //se for um usuario, deve mostrar a lista filtrada so com os pedidos feitos por 
                    //esse usuario 
                    <OrdersList filtered_list={filtered_list}/>
                    :
                    //se for o admin, mostra a lista sem filtro
                    <OrdersList filtered_list={status.orders}/>
                
                :
                <NoOrders />
            }
        </>
    );
};

export default MyOrders;