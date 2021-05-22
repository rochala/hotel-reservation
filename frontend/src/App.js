import logo from './logo.svg';
import React, {Component} from "react";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Main from "./components/Main"
import theme from "./theme.js";

const navLinks = [
    {title: 'HOTEL', path: '/'},
    {title: 'Reservations', path: '/reservations'},
    {title: 'Contact', path: '/contact'},
    {title: 'Sign up', path: '/login'}
]

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      // <ThemeProvider theme={theme}>
      //

    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header navLinks={navLinks}/>
        <div className='App'>
            <Main/>
        </div>
      </ThemeProvider>
    </React.StrictMode>

  );
}

export default App;
