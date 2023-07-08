import './UserProfileBox.css';
import ExitButton from '../ExitButton/ExitButton.js';
import { StatusContext } from '../../App.js';
import { useContext } from 'react';
import { SlUser } from 'react-icons/sl';
import { Link } from 'react-router-dom';


const UserProfileBox = ({callBack}) => {
    const { status } = useContext(StatusContext);

    return (
        <div className="profileBox">
            
            <SlUser 
                size={"4em"} 
                color={"var(--light_gray)"}
                className="profileIcon"
            />
            <h1>{`Perfil de ${status.user.username}`}</h1>
            <h2>Nome Completo</h2>
            <p>{status.user.fullname}</p>
            <h2>E-mail</h2>
            <p>{status.user.email}</p>

            {
                (status.user.type === "customer") ?
                    <>
                        <h2>Endereço</h2>
                        <p>{status.user.address}</p>
                        <h2>CEP</h2>
                        <p>{status.user.cep}</p>
                    </>:
                    <>
                    </>
            }

            <h2>Telefone</h2>
            <p>{status.user.phone}</p>

            <span className="button-container">
                <Link 
                    to="/editProfile" 
                    className="edit-profile-button button"
                    onClick={callBack}
                >Editar Perfil</Link>
                
                <Link 
                    to="/productOrders"
                    className="my-orders-button button"
                    onClick={callBack}
                >{status.user && (status.type === "adminLoggedIn") ? "Ver" : "Meus"} Pedidos</Link>
            </span>

            <ExitButton callBack={callBack} />
        </div>
    );
};

export default UserProfileBox;