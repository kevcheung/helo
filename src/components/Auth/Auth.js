import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    enterUsernameHandler = e => {
        this.setState({username: e.target.value})
    };
    enterPasswordHandler = e => {
        this.setState({password: e.target.value})
    };
    addUser = () => {
        const { username, password } = this.state;
        axios.post('/api/addUser/', {username, password})
        .then(() => this.props.history.push('/dashboard'));
    }
    
    render() {
        // console.log(this.props)
        const { username, password } = this.state;
        return (
            <div>
                <input
                    value={this.state.username}
                    onChange={this.enterUsernameHandler}
                    type="text"
                    name="username"
                />
                <input
                    value={this.state.password}
                    onChange={this.enterPasswordHandler}
                    type="text"
                    name="password"
                />
                <div>
                    <p className="displayUsername">{this.props.user.username}</p>
                    <p className="displayProfilePic">{this.props.user.profilePic}</p>
                    <button className="loginbutton" onClick={ () => this.props.getUser(username, password).then(() => this.props.history.push('/dashboard'))}>Login</button>
                    <button className="registerbutton" onClick={ () => this.addUser(username, password)}>Register</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect( mapStateToProps, {getUser})(Auth);