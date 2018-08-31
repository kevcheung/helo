import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSession } from '../../ducks/reducer';
import homeIcon from '../../images/home.png';
import newPost from '../../images/newpost.png';
import login from '../../images/login.png';
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
                <Link to="/dashboard" className="home-button"><img src={homeIcon} height="40" width="40" alt="home-button"/></Link>
                <Link to="/new" className="new-post-button"><img src={newPost} height="40" width="40" alt="new-post-button"/></Link>
                <Link to="/" className="login-button" button onClick={this.logoutClick}><img src={login} height="40" width="40" alt="login-button"/></Link>
            </ul>
        </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect( mapStateToProps, { getSession } )(Nav);

// export default Nav;