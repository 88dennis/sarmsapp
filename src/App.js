import React from 'react'
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom"
import Page1 from './Page1';
import Page2 from './Page2';
import SigninPage from './pages/SigninPage';
import Home from './pages/Home';

function App() {
  return (
   <HashRouter>
     <Switch>
       <Route exact path="/page1" component={Page1}/>
       <Route exact path="/page2" component={Page2}/>
       <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
     </Switch>
   </HashRouter>
  );
}

export default App;
