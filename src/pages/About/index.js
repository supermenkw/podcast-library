import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
    <div className="container mt-3">
        <h1>About</h1>
        <h4>
            <a href="/">Home</a> |
            <Link to="/about"> About</Link>
        </h4>
        <br />
        <p>Practice with React part 1</p>
    </div>
)

export default About;