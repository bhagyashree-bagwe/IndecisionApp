import React from 'react';
import ReactDom from 'react-dom';
import IndecisionApp from './component/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById("app");
ReactDom.render(<IndecisionApp/>,appRoot);

