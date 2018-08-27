import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSession } from '../../ducks/reducer'
import './Nav.css';

class Nav extends Component{
    constructor(){
        super();
        this.logoutClick = this.logoutClick.bind(this);
    }

    logoutClick = () => {
        axios.post('/api/logout')
    }
    componentDidMount(){
        this.props.getSession();
    }
    // console.log(props)
    render(){
    return(
        <div className="nav-container">
            <ul>
                <p className="displayProfilePic">{this.props.user.profilePic}</p>
                <p className="displayUsername">{this.props.user.username}</p>
                <Link to="/dashboard"><button className="buttons">Home</button></Link>
                <Link to="/new"><button className="buttons">New Post</button></Link>
                <Link to="/"><button onClick={this.logoutClick} className="buttons">Logout</button></Link>
            </ul>
        </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect( mapStateToProps, { getSession } )(Nav);

// export default Nav;