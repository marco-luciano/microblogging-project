import { Center, Container, Box, Flex } from '@chakra-ui/react';
import TextAreaPost from '../TextAreaPost/TextAreaPost';
import TweetList from '../TweetList/TweetList';
import './ContainerMain.sass';

const ContainerMain = () => {
    return (
        <Container class="ContainerMain" centerContent>
            <Flex direction="column" justify="center" align="center">
                <TextAreaPost></TextAreaPost>
                <TweetList></TweetList>
            </Flex>
        </Container>
    );
}
export default ContainerMain;
