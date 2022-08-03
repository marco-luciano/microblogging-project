import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import tweetTextContext from "../../contexts/tweetTextContext";
import './BtnTweet.sass';

const BtnTweet = (props) => {

    const tweetText = useContext(tweetTextContext).tweetText;
    const setTweetText = useContext(tweetTextContext).setTweetText;

    let options = {
        isLoading : props.btnTweetLoad,
    };

    // if the text is over CHAR_LIMIT chars, or empty, the button is disabled
    if (props.limitExceeded || props.textareaRef.current.value.length === 0) {
        options.disabled = "disabled";
    }
    
    return <div className="BtnTweet">
        <Button {...options} onClick={(event) => {
            props.textareaRef.current.value = "";
            props.handleOnClick(tweetText);
            setTweetText("");
        }}
            colorScheme="blue">Tweet</Button>
    </div>

}
export default BtnTweet;
