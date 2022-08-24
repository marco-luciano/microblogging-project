import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContainerMain from './components/ContainerMain/ContainerMain';
import PageProfile from './components/PageProfile/PageProfile';
import FormLogin from './components/FormLogin/FormLogin';
import useUserName from './utils/Db';
import './App.sass';

function App() {

    const defaultUser = { 
        userId: "0", 
        name: "username", 
        dateAdd: Date.now(),
        dateUpd: Date.now(),
    };

    const [userName, setUserName] = useUserName(defaultUser);

    return (
        <div className="App">
            <Flex direction="column" gap={12}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ContainerMain userName={userName} setUserName={setUserName} />} />
                        <Route path="/profile" element={<PageProfile userName={userName} setUserName={setUserName} />} />
                        <Route path="/signup" element={<FormLogin mode="signUp"/>} />
                        <Route path="/signin" element={<FormLogin mode="signIn"/>} />
                    </Routes>
                </Router>
            </Flex>
        </div>
    );
}

export default App;
