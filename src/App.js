import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink as Link } from 'react-router-dom';
import { Home } from './pages/Home';
import Profile from './pages/Profile';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li>
        <Link Link to="/">집으로..</Link>  
      </li>
      <li>
        <Link to="/about">어바웃으로</Link>    
      </li>
      <li>
        <Link to="/profile">프로필</Link>
      </li>
      <li>
        <Link to="/Login">로그인 뾰로롱</Link>
      </li>
    </ul>
      <Switch>
        <Route path="/profile/:id" component={Profile}/>
        <Route path="/profile/" component={Profile}/>
        <Route path="/Login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home} exact/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
