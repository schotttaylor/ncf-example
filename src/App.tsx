import './App.css';
import { StyledEngineProvider } from '@mui/material';
import Layout from './components/Layout';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Layout />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
