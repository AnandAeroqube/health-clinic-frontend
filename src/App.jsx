import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromApi } from "./redux/actions/fetchDataActions/fetchDataAction";
import "./assets/styles/App.css";
import logo from './assets/images/logo.svg';
import Header from "./components/header";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

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
    <>
       <Header/>
       <Detail
        detailInfo={'My Account'}
       />
       <Footer/>
       
    </>
  );
};
export default App;
