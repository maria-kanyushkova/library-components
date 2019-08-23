import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";
import { common, theme } from "./styles";
import "./theme/styles.scss";

common();
theme();

ReactDOM.render(<App />, document.getElementById('root'));
