import { Alert, Box, Flex, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import BtnTweet from "../BtnTweet/BtnTweet";
import { CHAR_LIMIT, MSG_TEXTAREA, MSG_CHAR_LIMIT } from "../../constants";
import './TextAreaPost.sass';

const TextAreaPost = (props) => {

    const [tweetText, setTweetText] = useState("");
    const [limitExceeded, setLimitExceeded] = useState(true);
    const textareaRef = useRef();

    const formatText = (text) => {

        setTweetText(text);

        // this value disables Tweet button if the text is out of limits
        const outOfLimits = (text.length > CHAR_LIMIT || text.length === 0);
        setLimitExceeded(outOfLimits);

        // if the text is over CHAR_LIMIT chars, display the alert

        (text.length > CHAR_LIMIT) ? props.setAlertDisplayText(MSG_CHAR_LIMIT) : props.setAlertDisplayText("");

    }

    const handleOnClick = (text) => {
        props.onBtnTweetClick(text);
    }

    return (
        <div className="TextAreaPost">
            <Flex direction="column" gap={2}>
                <Textarea ref={textareaRef} onChange={event => formatText(event.target.value)} placeholder={MSG_TEXTAREA}></Textarea>
                <Flex direction="row" justifyContent="space-between">
                    <Box> <Alert display={(props.alertDisplayText === "") ? "none" : "block"} className="AlertCharLimit" status='error'>{props.alertDisplayText}</Alert></Box>
                    <Box> <BtnTweet btnTweetLoad={props.btnTweetLoad} textareaRef={textareaRef} setTweetText={setTweetText} tweetText={tweetText} handleOnClick={handleOnClick} limitExceeded={limitExceeded}></BtnTweet> </Box>
                </Flex>
            </Flex>
        </div>
    );
}
export default TextAreaPost;
