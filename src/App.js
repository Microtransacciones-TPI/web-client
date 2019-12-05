import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./redux/store/index.js";
import AppRoutes from "./components/routes";
import { history } from "./redux/helpers/history";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          {/* <Home /> */}
          <AppRoutes />
        </div>
      </Router>      
    </Provider>
  );
}

export default App;
