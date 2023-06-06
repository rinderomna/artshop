import { useContext } from 'react';

import { StatusContext } from '../App.js';

const Admin = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            {
                (status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                    <h1>Tela home do Admin</h1> :
                    <h1>Acesso de administrador negado</h1>
            }
        </>
    );
};

export default Admin;