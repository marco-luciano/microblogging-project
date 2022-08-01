import { Button } from "@chakra-ui/react";
import './BtnTweet.sass';

const BtnTweet = (props) => {

    let options = {};

    // if the text is over CHAR_LIMIT chars, or empty, the button is disabled
    if (props.limitExceeded || props.textareaRef.current.value.length === 0) {
        options.disabled = "disabled";
    }

    return <div className="BtnTweet">
        <Button {...options} onClick={(event) => {
            props.handleOnClick(props.tweetText);
            props.setTweetText("");
            props.textareaRef.current.value = "";
        }}
            colorScheme="blue">Tweet</Button>
    </div>

}
export default BtnTweet;