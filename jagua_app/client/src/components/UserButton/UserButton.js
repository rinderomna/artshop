import "./UserButton.css";
import userIcon from "../../assets/visual_identity/icon/user_icon.png"

function UserButton(props) {
    const { username } = props;

    return (
        <div className="userRightNavContainer">
            <img src={userIcon} alt="Miniatura usuário" className="userProfileMiniature"/>
            <div className="userMessageContainer">
                <p>Olá, {username}</p>
            </div>
        </div>
    );
}

export default UserButton;