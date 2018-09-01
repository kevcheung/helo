import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './Auth.css';

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
            <div className="auth-main">
                <div className="auth-container">
                <iframe width="320" height="240" src="https://www.youtube.com/embed/YQHsXMglC9A?start=80" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <h1>Helo</h1>
                    <div className="input-container">
                        <p>Username:</p>
                        <input
                            value={this.state.username}
                            onChange={this.enterUsernameHandler}
                            type="text"
                            name="username"
                            />
                    </div>
                    <div className="input-container">
                        <p>Password:</p>
                        <input
                            value={this.state.password}
                            onChange={this.enterPasswordHandler}
                            type="text"
                            name="password"
                            />
                    </div>
                    <div className="button-container">
                        <button className="buttons" onClick={ () => this.props.getUser(username, password).then(() => this.props.history.push('/dashboard'))}>Login</button>
                        <button className="buttons" onClick={ () => this.addUser(username, password)}>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect( mapStateToProps, {getUser})(Auth);