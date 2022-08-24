import { auth } from '../services/firebase'
import { onAuthStateChanged } from 'firebase/auth';

// redirect to login if user is not logged in
const redirect = (navigate, path = '/signin') => {

    onAuthStateChanged(auth, (currentUser) => {
        if (!currentUser) {
            navigate(path, {replace: true});
        }
    });
};

export default redirect;