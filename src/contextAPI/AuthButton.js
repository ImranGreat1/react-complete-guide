import { useContext } from 'react';
import ContextAPI from "./ContextAPI";

const AuthButton = () => {

    // A more elegant way of consuming contextAPI in functional component using hooks
    const context = useContext(ContextAPI);

    return (
        <button onClick={context.loginLogout}>
            { context.isAuthenticated ? 'Logout' : 'Login' }
        </button>
    )
}

export default AuthButton;