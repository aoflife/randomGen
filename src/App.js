import logo from './logo.svg';
import './App.css';
import RandomGenerator from "./components/randGen/RandomGenerator"
import { Box } from '@material-ui/core';
import 'fontsource-roboto';
function App() {
  return (
    <Box flexDirection="column" justifyContent="center" alignItems="center" height="100vh">




        <RandomGenerator/>

    </Box>
    
  );
}

export default App;
