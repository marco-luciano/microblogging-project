import { Alert, Box, Flex, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import BtnTweet from "../BtnTweet/BtnTweet";
import { CHAR_LIMIT, MSG_TEXTAREA, MSG_CHAR_LIMIT } from "../../constants";
import './TextAreaPost.sass';

const TextAreaPost = (props) => {

    const [tweetText, setTweetText] = useState("");
    const [limitExceeded, setLimitExceeded] = useState(true);
    const [alertDisplay, setAlertDisplay] = useState("none");
    const textareaRef = useRef();

    const formatText = (text) => {

        setTweetText(text);

        // this value disables Tweet button if the text is out of limits
        const outOfLimits = (text.length > CHAR_LIMIT || text.length === 0);
        setLimitExceeded(outOfLimits);

        // if the text is over CHAR_LIMIT chars, display the alert
        if (text.length > CHAR_LIMIT) {
            setAlertDisplay("block");
        }
    }

    return (
        <div className="TextAreaPost">
            <Flex direction="column" gap={2}>
                <Textarea ref={textareaRef} onChange={event => formatText(event.target.value)} placeholder={MSG_TEXTAREA}></Textarea>
                <Flex direction="row" justifyContent="space-between">
                    <Box> <Alert display={alertDisplay} className="AlertCharLimit" status='error'>{MSG_CHAR_LIMIT}</Alert></Box>
                    <Box> <BtnTweet textareaRef={textareaRef} setTweetText={setTweetText} tweetText={tweetText} handleOnClick={props.onBtnTweetClick} limitExceeded={limitExceeded}></BtnTweet> </Box>
                </Flex>
            </Flex>
        </div>
    );
}
export default TextAreaPost;
