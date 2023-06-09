import "./UserButton.css";

function UserButton(props) {
    const { userName } = props;

    return (
        <div className="userRightNavContainer">
            <span className="userProfileMiniature"></span>
            <div className="userMessageContainer">
                <p>Olá, {userName}</p>
            </div>
        </div>
    );
}

export default UserButton;