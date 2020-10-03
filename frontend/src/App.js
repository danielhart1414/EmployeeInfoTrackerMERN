import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header />
            <Router>
                {/* <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" component={EditTodo} /> */}
            </Router>
        </div>
    );
}

export default App;
