import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            img: '',
            content: ''
        }
        this.formChange = this.formChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    formChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addPost = () => {
        const { title, img, content } = this.state;
        const { usersid } = this.props.user;
        axios.post(`/api/addPost/`, { title, img, content, usersid })
        .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        console.log(this.state)
        return (
            <div>
                Title:
                <input
                    value={this.state.title}
                    onChange={this.formChange}
                    name="title"
                />
                Img:
                <input
                    value={this.state.img}
                    onChange={this.formChange}
                    name="img"
                />
                Content:
                <input
                    value={this.state.content}
                    onChange={this.formChange}
                    name="content"
                />
                <button onClick={this.addPost}>Post</button>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect( mapStateToProps )(Form);