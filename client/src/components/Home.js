import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PhoneListContainer from './PhoneListContainer';

const Home = (props) => {
    return (
        <div>
            <section className="hero">
                <h2 className="title">The world's leading catalog of mobile phones.</h2>
                <p className="subtitle">Welcome to the one-stop-shop for all of your smartphone needs.</p>
            </section>
            <Router>
                <Route path="/" component={PhoneListContainer} />
            </Router>
        </div>
    );
};

export default Home;