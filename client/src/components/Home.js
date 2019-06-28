import React from 'react';
import PhoneListContainer from './PhoneListContainer';

const Home = () => {
    return (
        <div>
            <section className="hero">
                <h2 className="title">The world's leading catalog of mobile phones.</h2>
                <p className="subtitle">Welcome to the one-stop-shop for all of your smartphone needs.</p>
            </section>
            <PhoneListContainer/>
        </div>
    );
};

export default Home;