import './UserProfileBox.css';
import ExitButton from '../ExitButton/ExitButton.js';
import { StatusContext } from '../../App.js';
import { useContext } from 'react';

const UserProfileBox = ({callBack}) => {
    const { status } = useContext(StatusContext);

    return (
        <div className="profileBox">
            <h1>{`Perfil de ${status.user.userName}`}</h1>
            <h2>Abacate</h2>

            <ExitButton callBack={callBack} />
        </div>
    );
};

export default UserProfileBox;