import logo from "./logo.svg";
import "./App.css";
import JobApplicationForm from "./components/JobApplicationForm/JobApplicationForm";
import React from "react";
import { AppProviders } from "./providers/AppProviders";
import MuiMode from "./components/MuiMode/MuiMode";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <AppProviders>
      <h1>learn react</h1>
      <div className="App">
        <JobApplicationForm />
        <MuiMode />
        <Counter count={0}/>
        {/*       
    <MuiMode />
<Application />
      <Skills skills={['HTML', 'CSS']} />
      <Counter />
      <CounterTwo count={1} />
      <Users />
      <MuiMode /> */}
      </div>
    </AppProviders>
    /*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <JobApplicationForm />
    </div> */
  );
}

export default App;
