import React, { Component } from 'react';

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

    addPost(){
        axios.post(`/api/addPosts/`, this.state.title, this.state.img, this.state.content)
        .then(this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.title}
                    onChange={this.formChange}
                    name="title"
                />
                <input
                    value={this.state.img}
                    onChange={this.formChange}
                    name="img"
                />
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

export default Form;