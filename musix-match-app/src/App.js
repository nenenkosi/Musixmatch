import logo from './logo.svg';
import './App.css';
import HomePage from '../src/home'
import Lyrics from '../src/lyrics'
import {BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux.js/reducers"
import thunkMiddleware from "redux-thunk";

function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;; // Change IP address to your machine"s IP address if you would like to use devtools

  const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));
  return (
    <Provider store={store}>
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/lyrics/track/:id" element={<Lyrics/>} />

        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
