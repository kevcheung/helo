import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            img: '',
            content: '',
            username: '',
            profilePic: ''
        }
        this.getOnePost = this.getOnePost.bind(this);
    }

    getOnePost(){
        axios.get(`/api/getOnePost/${this.props.match.params.postid}`)
        .then(
            response => {
                // console.log(response)
                this.setState({
                    title: response.data[0].title,
                    img: response.data[0].img,
                    content: response.data[0].content,
                    username: response.data[0].username,
                    profilePic: response.data[0].profile_pic
                })
            })
    }

    componentDidMount(){
        this.getOnePost()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.title}
                {this.state.img}
                {this.state.content}
                {this.state.username}
                {this.state.profilePic}
            </div>
        );
    }
}

export default Post;