import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';

import home from './pages/home';
import blog from './pages/blog';

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/blog/:blogId" component={blog}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App