function UserButton(props) {
    const { userName } = props;

    return (
        <div>
            <p>Olá, {userName}</p>
        </div>
    );
}

export default UserButton;