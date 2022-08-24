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
                    return <Tweet key={nanoid()} user={"user" + tweet.id} text={tweet?.data?.content} date={tweet?.data?.date} />
                })}
            </VStack>
        </div>
    );
}

export default TweetList;
