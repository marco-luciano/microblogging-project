import { createContext } from 'react';

const tweetListContext = createContext({
    tweetList: [],
    setTweetList: (tweetList) => {}
});

export default tweetListContext;

