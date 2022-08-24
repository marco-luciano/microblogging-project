import { useState } from 'react';
import { auth, db} from '../services/firebase';
import { doc, setDoc} from  "firebase/firestore";

function useLogin(props) {

    const [user, setUser] = useState("");

    const handleSetUser = async (props, mode = "signIn") => {
        try {
            const user = await props.callback(auth, props.email, props.password);
            const userRef = doc(db, "users", user.user.uid);
            const timestamp = Date.now();

            const startingData = { 
                userName : `user${timestamp}`, 
                displayName : `user${timestamp}`,
                description : `Hey There! This is user${timestamp}`,
                profilePicURL : "",
                dateAdd : timestamp, 
                dateUpd : timestamp
            };

            let mergeData = (mode === "signIn") ? { dateUpd : timestamp } : startingData;
            setDoc(userRef, mergeData, { merge: true });
            setUser(user);
        } catch (error) {
            console.log(error);
            alert("There was an error signing in");
        }
    }

    return [user, handleSetUser];
}

export default useLogin;
