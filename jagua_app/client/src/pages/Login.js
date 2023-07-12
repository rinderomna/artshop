import { useContext, useEffect } from "react";
import { StatusContext } from "../App";

import LoginBox from "../components/LoginBox/LoginBox";

// Administra login de usuario
const Login = () => {
    const {
        status,
        setStatus
    } = useContext(StatusContext);

    useEffect(() => {
        if (status.type !== "transient") {
            setStatus(
                {
                    ...status,
                    type: "transient"
                }
            );
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <LoginBox />
    );
};

export default Login;