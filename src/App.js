import React from 'react'
import './App.css';
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import Page1 from './Page1';
import Page2 from './Page2';


function App() {
  return (


   <HashRouter>
     <Switch>
       <Route exact path="/" component={Page1}/>
       <Route exact path="/page2" component={Page2}/>
     </Switch>
   </HashRouter>
  );
}

export default App;
