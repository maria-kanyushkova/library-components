import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";
import { common } from "./styles";
import "./theme/styles.scss";

common();

ReactDOM.render(<App />, document.getElementById('root'));
