import { Alert, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import BtnTweet from "../BtnTweet/BtnTweet";
import './TextAreaPost.sass';

const TextAreaPost = () => {

    const CHAR_LIMIT = 140;
    const MSG_TEXTAREA = "What you have in mind...";
    const MSG_CHAR_LIMIT = "The tweet can't contain more then 140 chars.";

    const [text, setText] = useState("");
    const [limitExceeded, setLimitExceeded] = useState(false);
    const [alertDisplay, setAlertDisplay] = useState("none");

    const formatText = (text) => {
        setLimitExceeded((text.length > CHAR_LIMIT));
        let alertDisplay = (text.length > CHAR_LIMIT) ? "block" : "none";
        setAlertDisplay(alertDisplay);
    }
    return (
        <div className="TextAreaPost">
            <Flex direction="column" gap={2}>
                <Textarea onChange={event => formatText(event.target.value)} placeholder={MSG_TEXTAREA}></Textarea>
                <Flex direction="row" justifyContent="space-between">
                    <Box> <Alert display={alertDisplay} className="AlertCharLimit" status='error'>{MSG_CHAR_LIMIT}</Alert></Box>
                    <Box> <BtnTweet limitExceeded={limitExceeded}></BtnTweet> </Box>
                </Flex>
            </Flex>
        </div>
    );
}
export default TextAreaPost;
