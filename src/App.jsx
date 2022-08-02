import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import localforage from 'localforage';
import Navbar from './components/Navbar/Navbar';
import ContainerMain from './components/ContainerMain/ContainerMain';
import PageProfile from './components/PageProfile/PageProfile';
import './App.sass';

function App() {

    const [userName, setUserName] = useState("User Name");

    const getUserName = () => {
        localforage.getItem('userName').then((value) => {
            setUserName(value);
        });
    };

    const handleSetUserName = (userName) => {
        localforage.setItem('userName', userName).then(() => {
            setUserName(userName);
        });
    }

    useEffect(() => getUserName(), []);

    return (
        <div className="App">
            <Flex direction="column" gap={12}>
                <Navbar />
                <Router>
                    <Routes>
                        <Route path="/" element={<ContainerMain userName={userName} setUserName={setUserName} />} />
                        <Route path="/profile" element={<PageProfile userName={userName} setUserName={handleSetUserName} />} />
                    </Routes>
                </Router>
            </Flex>
        </div>
    );
}

export default App;
