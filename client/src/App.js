import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

function App() {
  return (
    <Router>
    <div className="App">
      <h3>Fib Calculator</h3>
      <header>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fib}/>
        <Route path="/otherpage" component={OtherPage}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
