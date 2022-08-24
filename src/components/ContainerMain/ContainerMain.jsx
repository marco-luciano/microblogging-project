import { Container, Flex } from '@chakra-ui/react';
import { formatRFC3339 } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { auth, db } from '../../services/firebase';
import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import tweetListContext from '../../contexts/tweetListContext';
import TextAreaPost from '../TextAreaPost/TextAreaPost';
import TweetList from '../TweetList/TweetList';
import redirect from '../../utils/redirect';
import { nanoid } from 'nanoid';
import { URL_BASE_TWEET, MSG_SERVER_LOAD_ERROR, MSG_SERVER_SAVE_ERROR, TIME_LOAD_TWEETS } from '../../constants';
import './ContainerMain.sass';

const ContainerMain = (props) => {

    redirect(useNavigate());

    const [btnTweetLoad, setBtnTweetLoad] = useState(false);
    const [alertDisplayText, setAlertDisplayText] = useState("");
    const [tweetList, setTweetList] = useState([]);

    let tweetsRef = collection(db, "tweets");
    let usersRef = collection(db, "users");

    const getTweets = () => {
        setAlertDisplayText("Loading tweets...");
        const unsub = onSnapshot(tweetsRef, (querySnapshot) => {
            querySnapshot.docs.forEach((doc) => { console.log(doc.data().uid) });
            setTweetList(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
            setAlertDisplayText("");
        })
        return () => unsub();
    };

    const setTweetHandler = (text) => {
        // set button spinner
        setBtnTweetLoad(true);

        const tweet = {
            content: text,
            userName: "user" + Date.now(),
            date: formatRFC3339(new Date(), { fractionDigits: 3 }),
            uid: auth.currentUser.uid
        };

        const tweetsRef = doc(db, "tweets", nanoid());
        setDoc(tweetsRef, tweet);
        setAlertDisplayText("");
        setTweetList((pre) => [tweet, ...pre]);
        setBtnTweetLoad(false);

    };

    useEffect(() => {
        getTweets();
    }, []);

    useEffect(() => {
        tweetList.forEach((tweet) => {
            let refe = tweet.data.uid;
            let docSnap = getDoc(refe).then((doc) => {
                return doc.data().userName;
            });
        });


    }, []);

    return (
        (auth?.currentUser?.email) ? (
            <tweetListContext.Provider value={{ tweetList, setTweetList: setTweetList }}>
                <Container className="ContainerMain" maxW='600px'>
                    <Flex direction="column" justify="center" align="center">
                        <TextAreaPost alertDisplayText={alertDisplayText} setAlertDisplayText={setAlertDisplayText} btnTweetLoad={btnTweetLoad} onBtnTweetClick={setTweetHandler}></TextAreaPost>
                        <TweetList></TweetList>
                    </Flex>
                </Container>
            </tweetListContext.Provider>
        ) : (<></>)
    );
}
export default ContainerMain;
