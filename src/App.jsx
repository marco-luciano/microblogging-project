import './App.sass';
import {Button, Center} from '@chakra-ui/react';
import ContainerMain from './components/ContainerMain/ContainerMain';


function App() {
  return (
    <div className="App">
      <Center>
        <ContainerMain> 
        </ContainerMain>
      </Center>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
}

export default App;
