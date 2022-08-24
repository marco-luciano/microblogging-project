import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContainerMain from './components/ContainerMain/ContainerMain';
import PageProfile from './components/PageProfile/PageProfile';
import FormLogin from './components/FormLogin/FormLogin';
import './App.sass';

function App() {


    return (
        <div className="App">
            <Flex direction="column" gap={12}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ContainerMain/>} />
                        <Route path="/profile" element={<PageProfile />} />
                        <Route path="/signup" element={<FormLogin mode="signUp"/>} />
                        <Route path="/signin" element={<FormLogin mode="signIn"/>} />
                    </Routes>
                </Router>
            </Flex>
        </div>
    );
}

export default App;
