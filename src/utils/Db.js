import { useCallback, useState, useEffect } from "react";
import { db } from "../services/firebase";
import { nanoid } from "nanoid";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";

function useUserName(props) {
    let usersRef = collection(db, "users");

    const [userName, setUserName] = useState(props.userName);

    const getUserName = useCallback((id) => {
        const q = query(usersRef, where("userId", "==", id));

        getDocs(q).then((data) => {
            data.forEach((doc) => {
                setUserName(doc);
            });
        });
    }, [usersRef]);

    const handleSetUserName = (user) => {

        const newUser = {...userName.data(), dateUpd : new Date()};
        const q = query(usersRef, where("name", "==", user));
        console.log(q);
        
        getDocs(q).then((data) => {
            console.log(data);return;
            data.forEach((doc) => {
                console.log(doc);
            });
            console.log(data.id);
            if (data.exists()) {
                setUserName(data.data());
            } else {

                setDoc(doc(usersRef, user), newUser ).then(data => {
                    setUserName(newUser);
                });
            }
        });

        
    };

    // Hard-coded for now
    useEffect(() => getUserName("1"), []);

    return [userName, handleSetUserName];
}

export default useUserName;
