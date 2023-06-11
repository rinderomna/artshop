import React, { useContext } from "react";
import { StatusContext } from "../App.js";
import OrdersBanner from "../components/OrdersBanner/OrdersBanner.js";
import OrdersList from "../components/OrdersList/OrdersList.js"
import NoOrders from "../components/NoOrders/NoOrders.js";
const MyOrders = () => {

    const { status } = useContext(StatusContext);

    let filtered_list = null;

    if (status.orders != null) {

        //filtered_list recebe apenas os pedidos do usuario ou todos os pedidos registrados (caso seja o admin)
        filtered_list =
        status.type === "customerLoggedIn"
            ? status.orders.filter((order) => order.buyer.user_name === status.user.userName)
            : status.orders;
    }

    console.log("MyOrders.js -> filteredList: " + filtered_list);
    
    return (
        <>
            <OrdersBanner />
            
            {(filtered_list != null && filtered_list != "" ) ? 
            
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