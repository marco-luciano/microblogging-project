import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import localforage from 'localforage';
import Navbar from './components/Navbar/Navbar';
import ContainerMain from './components/ContainerMain/ContainerMain';
import PageProfile from './components/PageProfile/PageProfile';
import useUserName from './utils/Db';
import './App.sass';

function App() {

    const [userName, setUserName] = useUserName("User Name");

    return (
        <div className="App">
            <Flex direction="column" gap={12}>
                <Navbar />
                <Router>
                    <Routes>
                        <Route path="/" element={<ContainerMain userName={userName ?? "User Name"} setUserName={setUserName} />} />
                        <Route path="/profile" element={<PageProfile userName={userName ?? "User Name"} setUserName={setUserName} />} />
                    </Routes>
                </Router>
            </Flex>
        </div>
    );
}

export default App;
