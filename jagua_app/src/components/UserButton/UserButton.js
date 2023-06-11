import "./UserButton.css";
import userIcon from "../../assets/visual_identity/icon/user_icon.png"

function UserButton(props) {
    const { userName } = props;

    return (
        <div className="userRightNavContainer">
            <img src={userIcon} alt="Miniatura usuário" className="userProfileMiniature"/>
            <div className="userMessageContainer">
                <p>Olá, {userName}</p>
            </div>
        </div>
    );
}

export default UserButton;