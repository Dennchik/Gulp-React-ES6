import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";


// -----------------------------------------------------------------------------
import ScrollAccordion from "./app/components/ScrollAccordion.jsx";
ReactDOM.render(
	<StrictMode><ScrollAccordion /></StrictMode>, document.querySelector('.main-content__body'));
// -----------------------------------------------------------------------------
import Header from "./app/Header.jsx";
ReactDOM.render(
	<StrictMode><Header /></StrictMode>, document.querySelector('.header'));
// -----------------------------------------------------------------------------
import Footer from "./app/Footer.jsx";
ReactDOM.render(
	<StrictMode><Footer /></StrictMode>, document.querySelector('.footer'));
// -----------------------------------------------------------------------------
// import Form from "./app/components/Form.jsx";
// ReactDOM.render(
// 	<StrictMode><Form /></StrictMode>, document.querySelector('.main-content__form'));