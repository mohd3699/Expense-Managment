import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Navebar from "./components/Navebar"


function App() {
    return (
       <>
        <Header />
        <Navebar />
       </>
    )
}

export default App;