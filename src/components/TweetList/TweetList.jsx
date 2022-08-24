import { VStack } from "@chakra-ui/react";
import Tweet from "../Tweet/Tweet";
import { nanoid } from "nanoid";
import tweetListContext from '../../contexts/tweetListContext';
import './TweetList.sass';
import { useContext } from "react";

const TweetList = (props) => {

    const { tweetList } = useContext(tweetListContext);

    return (
        <div className="TweetList">
            <VStack spacing={5}>
                {tweetList.map((tweet) => {
                    return <Tweet key={nanoid()} user={tweet.userName} text={tweet.content} date={tweet.date} />
                })}
            </VStack>
        </div>
    );
}

export default TweetList;
