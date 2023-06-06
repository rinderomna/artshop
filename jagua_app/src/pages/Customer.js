import { useContext } from 'react';

import { StatusContext } from '../App.js';

const Customer = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            {
                (status.user && status.type === "customerLoggedIn" && status.user.type === "customer") ?
                    <h1>Tela home do Cliente</h1> :
                    <h1>Cliente não logado</h1>
            }
        </>
    );
};

export default Customer;