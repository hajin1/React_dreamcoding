import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count habit-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default NavBar;