import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h1>Podkinian</h1>
                <h4>
                    <a href="/">Home</a> |
                    <Link to="/about"> About</Link>
                </h4>
            </div>
        )
    }
}

export default Header;