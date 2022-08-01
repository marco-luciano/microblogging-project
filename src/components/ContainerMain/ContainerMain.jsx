import { Container, Flex } from '@chakra-ui/react';
import TextAreaPost from '../TextAreaPost/TextAreaPost';
import TweetList from '../TweetList/TweetList';
import localforage from 'localforage';
import { formatRFC3339 } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ContainerMain.sass';
import { URL_BASE_TWEET } from '../../constants';

const ContainerMain = () => {

    const [tweetList, setTweetList] = useState([]);

    const getTweets = () => {
        axios.get(URL_BASE_TWEET + "/tweet")
        .then((response) => {
            return response.data.tweets;
        })
        .then((result) => {
            let list = result ?? [];
            setTweetList(list);
            console.log("Tweets loaded", result);
        });
    };

    const setTweetHandler = (text) => {

        const tweet = {
            content: text,
            userName: "John Doe",
            date: formatRFC3339(new Date(), { fractionDigits: 3 }),
        };

        setTweetList((pre) => [tweet, ...pre]);

        axios.post(URL_BASE_TWEET + "/tweet", tweet).then((response) => {
            if (response.status === 200) {
                console.log("Tweet saved", response);
            }
        });

    };

    useEffect(() => getTweets(), []);

    return (
        <Container className="ContainerMain" maxW='600px'>
            <Flex direction="column" justify="center" align="center">
                <TextAreaPost onBtnTweetClick={setTweetHandler}></TextAreaPost>
                <TweetList list={tweetList}></TweetList>
            </Flex>
        </Container>
    );
}
export default ContainerMain;
