import { Container, Flex } from '@chakra-ui/react';
import { formatRFC3339 } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TextAreaPost from '../TextAreaPost/TextAreaPost';
import TweetList from '../TweetList/TweetList';
import './ContainerMain.sass';
import { URL_BASE_TWEET, MSG_SERVER_LOAD_ERROR, MSG_SERVER_SAVE_ERROR } from '../../constants';

const ContainerMain = () => {

    const [tweetList, setTweetList] = useState([]);
    const [btnTweetLoad, setBtnTweetLoad] = useState(false);
    const [alertDisplayText, setAlertDisplayText] = useState("");

    const getTweets = () => {
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
            userName: "John Doe", // hard-coded for now
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

    useEffect(() => getTweets(), []);

    return (
        <Container className="ContainerMain" maxW='600px'>
            <Flex direction="column" justify="center" align="center">
                <TextAreaPost alertDisplayText={alertDisplayText} setAlertDisplayText={setAlertDisplayText} btnTweetLoad={btnTweetLoad} onBtnTweetClick={setTweetHandler}></TextAreaPost>
                <TweetList list={tweetList}></TweetList>
            </Flex>
        </Container>
    );
}
export default ContainerMain;
