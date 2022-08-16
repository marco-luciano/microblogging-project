import localforage from "localforage";
import { useState } from "react";

function useUserName(props) {
    const [userName, setUserName] = useState(props.userName);

    const getUserName = () => {
        localforage.getItem("userName").then((value) => {
            setUserName(value);
        });
    };

    const handleSetUserName = (userName) => {
        localforage.setItem("userName", userName).then(() => {
            setUserName(userName);
        });
    };

    getUserName();

    return [userName, handleSetUserName];
}

export default useUserName;
