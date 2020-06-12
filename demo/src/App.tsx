// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import logo from './logo.svg';
import './App.css';
import { DopeEditor, Box } from 'good-react-components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DopeEditor />
        <img src={logo} className="App-logo" alt="logo" />
        <Box color="main" backgroundColor="white">
        <p css={theme => ({ color: theme.main })}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        </Box>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
