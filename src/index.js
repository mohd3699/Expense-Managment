import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import theme from './Theme';
import "./index.css";

ReactDom.render(

    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")

)