import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/RefsDemo';
import HeroComp from './components/HeroComp';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RefsDemo></RefsDemo>
        <ErrorBoundary>  
          <HeroComp heroName="Bruce"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroComp heroName="Clark"/>
        </ErrorBoundary>
        {/* <ErrorBoundary>
          <HeroComp heroName="Joker"/>
        </ErrorBoundary> */}
        
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
     
    </div>
  );
}

export default App;
