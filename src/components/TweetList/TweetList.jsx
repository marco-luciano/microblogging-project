import { VStack } from "@chakra-ui/react";
import Tweet from "../Tweet/Tweet";
import { nanoid } from "nanoid";
import './TweetList.sass';

const TweetList = (props) => {


    return (
        <div className="TweetList">
            <VStack spacing={5}> 
                {props.list.map((tweet) => {
                    return <Tweet key={nanoid()} user={tweet.user} text={tweet.text} date={tweet.date} />
                })}
            </VStack>
        </div>
    );
}
export default TweetList;
