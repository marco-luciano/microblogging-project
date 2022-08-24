import React from 'react';
import { useState } from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    Link,
    Text,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from "react-router-dom";
import useLogin from '../../hooks/useLogin';
import { FcGoogle } from 'react-icons/fc';
import './FormLogin.sass'

const FormLogin = (props) => {

    const navigate = useNavigate();

    const formConfig = {
        signIn: {
            title: 'Sign In',
            action: signInWithEmailAndPassword,
            icon: '',
        },
        signUp: {
            title: 'Sign Up',
            action: createUserWithEmailAndPassword,
            icon: '🎈',
        }
    };
    
    console.log(formConfig[props.mode].title);
    onAuthStateChanged(auth, (currentUser) => {
        // if user is logged, no need neither to sign in nor to sign up
        if (currentUser) {
            navigate('/');
        }
    });

    const [user, setUser] = useLogin({});

    const [signInUserName, setLoginUserName] = useState("");
    const [signInPassword, setLoginPassword] = useState("");

    const validateEmail = (email) => {
        console.log(email);
        return /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email);
    }
    const handleSetUser = (data) => {
        // regex for email
        const validUserName = validateEmail(data.email);

        validUserName ? setUser(data) : alert("Invalid email");
    }

    return (
        <Flex h="80vh" alignItems="center" justifyContent="center">
            <Flex
                className="SignInFlex"
                flexDirection="column"
                p={14}
                borderRadius={8}
                boxShadow="lg"
                maxW="450px"
            >
                <Heading mb={10}>{formConfig[props.mode].title}{formConfig[props.mode].icon}</Heading>
                <FormControl>
                    <Input
                        placeholder="johndoe@gmail.com"
                        type="email"
                        variant="filled"
                        mb={8}
                        errorBorderColor="red.500"
                        borderColor="gray.900"
                        onChange={(e) => setLoginUserName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Password"
                        type="password"
                        variant="filled"
                        mb={6}
                        borderColor="gray.900"
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                </FormControl>
                <Button
                    mt={10}
                    mb={4}
                    bgColor="#1DA1F2"
                    w="full"
                    onClick={() => handleSetUser({ email: signInUserName, password: signInPassword, callback: formConfig[props.mode].action })}
                >
                    <Center>
                        <Text>{formConfig[props.mode].title}</Text>
                    </Center>
                </Button>
                <Button
                    w="full"
                    variant="outline"
                    leftIcon={<FcGoogle />}
                    bgColor="white"
                    color="black"
                    borderColor="gray.900"
                >
                    <Center>
                        <Text>{formConfig[props.mode].title + " with Google"}</Text>
                    </Center>
                </Button>
                {props.mode === 'signIn' &&
                <Box borderColor="green.900">
                    <Text mt={10} textAlign="center">
                        <b>New to Microblogging?</b> <Link href="/signup">Create an account</Link>
                    </Text>
                </Box>}

            </Flex>
        </Flex>
    );
};

export default FormLogin;
