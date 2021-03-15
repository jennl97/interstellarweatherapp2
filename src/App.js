import React from "react";
import './App.css';

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from "./Components/Header";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
     
     {/*Routes*/}
     <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/mecury"></Route>
      <Route exact path="/venus"></Route>
      <Route exact path="/earth"></Route>
      <Route exact path="/mars"></Route>
      <Route exact path="/jupiter"></Route>
      <Route exact path="/saturn"></Route>
      <Route exact path="/uranus"></Route>
      <Route exact path="/neptune"></Route>
      <Route exact path="/pluto"></Route>
     </Switch>

    </div>
    </Router>
  );
}

export default App;
