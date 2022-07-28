import { Button } from "@chakra-ui/react";
import './BtnTweet.sass';

const BtnTweet = (props) => {

    let options = {};

    if (props.limitExceeded) {
        options.disabled = "disabled";
    }

    return <div className="BtnTweet">
        <Button {...options} colorScheme="blue">Tweet</Button>
    </div>

}
export default BtnTweet;
