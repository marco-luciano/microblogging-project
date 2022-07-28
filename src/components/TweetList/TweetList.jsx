import { VStack } from "@chakra-ui/react";
import Tweet from "../Tweet/Tweet";
import { nanoid } from "nanoid";
import { formatRFC3339 } from 'date-fns';
import './TweetList.sass';

const TweetList = () => {

    const date = formatRFC3339(new Date(), { fractionDigits: 3 });

    const tweets = [
        {
            user: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe",
            date: date
        },
        {
            user: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe",
            date: date
        },
        {
            user: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe",
            date: date
        },
    ];
    return (
        <div className="TweetList">
            <VStack spacing={5}>
                {tweets.map((tweet) => {
                    return <Tweet key={nanoid()} user={tweet.user} text={tweet.text} date={tweet.date} />
                })}
            </VStack>
        </div>
    );
}
export default TweetList;
