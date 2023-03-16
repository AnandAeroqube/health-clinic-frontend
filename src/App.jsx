import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getDataFromApi} from "./redux/actions/fetchDataActions/fetchDataAction";
import "./assets/styles/App.css";
import logo from './assets/images/logo.svg';
import Header from "./components/header";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import LeftPane from "./components/LeftPane";
import Account from "./components/Account";

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

    const [detail, setDetail] = useState("My Account");

    const updateDetail = (state) => {
        setDetail(state);
        console.log(state)
    }


    return (
        <>
            <div className="main-div">This is an app</div>
        </>
    );
};
export default App;
