import { Alert, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import BtnTweet from "../BtnTweet/BtnTweet";
import './TextAreaPost.sass';

const TextAreaPost = () => {

    const MSG_TEXTAREA = "What you have in mind...";
    const MSG_CHAR_LIMIT = "The tweet can't contain more then 140 chars.";

    return (
        <div className="TextAreaPost">
            <Flex direction="column" gap={2}>
                <Textarea placeHolder={MSG_TEXTAREA}></Textarea>
                <Flex direction="row" justifyContent="space-between">
                    <Box> <Alert className="AlertCharLimit" status='error'>{MSG_CHAR_LIMIT}</Alert></Box>
                    <Box> <BtnTweet></BtnTweet> </Box>
                </Flex>
            </Flex>
        </div>
    );
}
export default TextAreaPost;
