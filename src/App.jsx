import {Flex} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContainerMain from './components/ContainerMain/ContainerMain';
import './App.sass';
import PageProfile from './components/PageProfile/PageProfile';


function App() {
  return (
    <Router>
    <div className="App">
      <Flex direction="column" gap={12}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContainerMain />} />
          <Route path="/profile" element={<PageProfile />} /> 
        </Routes>
      </Flex>
    </div>
    </Router>
  );
}

export default App;
