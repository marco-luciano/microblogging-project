import { useState } from 'react';
import { auth } from '../services/firebase';

function useLogin(props) {

    const [user, setUser] = useState("");

    const handleSetUser = async (props) => {
        try {
            console.log(props);
            const user = await props.callback(auth, props.email, props.password);
            setUser(user);
        } catch (error) {
            console.log(error);
            alert("There was an error signing in");
        }
    }

    return [user, handleSetUser];
}

export default useLogin;
