import { createContext } from "react";

const tweetTextContext = createContext({
    tweetText: "",
    setTweetText: (tweetText) => { }
});

export default tweetTextContext;