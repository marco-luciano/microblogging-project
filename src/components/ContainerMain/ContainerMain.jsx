import { Container, Flex } from '@chakra-ui/react';
import { formatRFC3339 } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { auth } from '../../services/firebase';
import tweetListContext from '../../contexts/tweetListContext';
import TextAreaPost from '../TextAreaPost/TextAreaPost';
import TweetList from '../TweetList/TweetList';
import redirect from '../../utils/redirect';
import { URL_BASE_TWEET, MSG_SERVER_LOAD_ERROR, MSG_SERVER_SAVE_ERROR, TIME_LOAD_TWEETS } from '../../constants';
import './ContainerMain.sass';

const ContainerMain = (props) => {

    redirect(useNavigate());
    
    const [btnTweetLoad, setBtnTweetLoad] = useState(false);
    const [alertDisplayText, setAlertDisplayText] = useState("");
    const [tweetList, setTweetList] = useState([]);
    const getTweets = () => {

        setAlertDisplayText("Loading tweets...");

        axios.get(URL_BASE_TWEET + "/tweet")
            .then((response) => {
                return response.data.tweets;
            })
            .then((result) => {
                let list = result ?? [];
                setTweetList(list);
                console.log("Tweets loaded");
                setAlertDisplayText("");
            }).catch((error) => {
                console.error("Error loading tweets", error);
                setAlertDisplayText(MSG_SERVER_LOAD_ERROR);
            });
    };

    const setTweetHandler = (text) => {
        // set button spinner
        setBtnTweetLoad(true);

        const tweet = {
            content: text,
            userName: props.userName.data().name,
            date: formatRFC3339(new Date(), { fractionDigits: 3 }),
        };

        axios.post(URL_BASE_TWEET + "/tweet", tweet)
            .then((response) => {
                console.log("Tweet saved");
                setAlertDisplayText("");
                setTweetList((pre) => [tweet, ...pre]);
                setBtnTweetLoad(false);
            }).catch((error) => {
                console.error("Error saving tweet", error);
                setAlertDisplayText(MSG_SERVER_SAVE_ERROR);
                setBtnTweetLoad(false);
            });

    };

    useEffect(() => {
        getTweets();
        const interval = setInterval(() => {
            getTweets()
        }, TIME_LOAD_TWEETS);

        return () => clearInterval(interval)
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
