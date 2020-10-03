import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div>
            <Router>
                {/* <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" component={EditTodo} /> */}
            </Router>
        </div>
    );
}

export default App;
