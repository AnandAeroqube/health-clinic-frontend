import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromApi } from "./redux/actions/fetchDataActions/fetchDataAction";
import "./assets/styles/App.css";
import logo from './assets/images/logo.svg';

/**
 * functional component App.js
 */
const App = () => {
  const content = useSelector(state => state.main);
  const dispatch = useDispatch();

  /** equivalent to componentDidMount with second params as [] */
  useEffect(() => {
    dispatch(getDataFromApi());
    console.log(content)
  }, []);

  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
        Hello World!!
      </div>
    </div>
  );
};
export default App;
