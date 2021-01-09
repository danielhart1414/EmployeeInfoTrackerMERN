import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Tracker from './components/Tracker'

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Route path="/" exact component={Landing} />
                <Route path="/tracker" component={Tracker} />
            </Router>
        </div>
    );
}

export default App;
