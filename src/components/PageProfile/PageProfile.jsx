import { useState } from 'react';
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import redirect from '../../utils/redirect';
import './PageProfile.sass'

const PageProfile = (props) => {

    redirect(useNavigate());
    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const isError = input === '';

    return (
        <div className="PageProfile">
            <Container maxW="800px">
                <Flex direction="column" gap={8}>
                    <Heading as="h1" size="xl">Profile</Heading>
                    <FormControl isInvalid={isError} isRequired>
                        <FormLabel>User Name</FormLabel>
                        <Input
                            className="inputSaveUserName"
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Flex>
                <Box>
                    <Button className="btnSaveUserName" disabled={isError} onClick={() => props.setUserName(input)}>Save</Button>
                </Box>
            </Container>


        </div>
    );
}
export default PageProfile;
