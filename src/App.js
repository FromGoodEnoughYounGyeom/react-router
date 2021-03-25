import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {


  return (
    <>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>about</button>         
        </Link>
        <Link to="/users">
         <button>User</button>
        </Link>
      </header>
      <hr/>
      <main>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  );
}
export default App;
