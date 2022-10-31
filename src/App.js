import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import State from "./useState/Index";
import Effect from "./useEffect/Index";
import Context from "./useContext/Index";
// import Placeholder from "./placeholder";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
            <li className="li">
              <Link to="/placeholder">Placeholder</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<State />} />
          <Route path="/effect" exact element={<Effect />} />
          <Route path="/context" exact element={<Context />} />
          {/* <Route path="/placeholder" exact element={<Placeholder />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;