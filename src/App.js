import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Record from "./Components/Record";
import Listen from "./Components/Listen";
function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* 
              <li>
                <Link to="/record">Record</Link>
              </li>
              <li>
                <Link to="/listen">Listen</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            <Route path="/record">
              <Record />
            </Route>
            <Route path="/listen">
              <Listen />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
