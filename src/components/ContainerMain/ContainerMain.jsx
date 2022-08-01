import { Center, Container, Box, Flex } from '@chakra-ui/react';
import TextAreaPost from '../TextAreaPost/TextAreaPost';
import TweetList from '../TweetList/TweetList';
import localforage from 'localforage';
import { formatRFC3339 } from 'date-fns';
import { nanoid } from 'nanoid';
import './ContainerMain.sass';
import { useEffect, useState } from 'react';

const ContainerMain = () => {

    const [tweetList, setTweetList] = useState([]);

    const getTweets = () => {
        localforage.getItem('tweetList').then((result) => {
            let list = result ?? [];
            setTweetList(list);
            console.log("Tweets loaded", result);
        });
    };

    const setTweetHandler = (text) => {
        
        const tweet = { 
            id: nanoid(),
            user: "Marco",
            text: text,
            date: formatRFC3339(new Date(), { fractionDigits: 3 }),
        };

        setTweetList((pre) => [tweet, ...pre]);

        localforage.setItem('tweetList', [tweet, ...tweetList]).then((result) => {
            console.log("Tweet saved", result);
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
