import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../../images/search.png';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
        this.storeSearchHandler = this.storeSearchHandler.bind(this);
        this.checkboxClickHandler = this.checkboxClickHandler.bind(this);
        this.getPosts = this.getPosts.bind(this);
        this.emptySearch = this.emptySearch.bind(this);
    }

    getPosts = () => {
        axios.get(`/api/getPosts/?userposts=${this.state.userposts}&search=${this.state.search}`)
        .then(
            response => {
            // console.log(response)
                this.setState({
                    posts: response.data
                })
            })
        .then(
            this.emptySearch()
        )
    }

    storeSearchHandler = e => {
        this.setState({
            search: e.target.value
        })
    }

    checkboxClickHandler = () => {
        this.setState({
            userposts: !this.state.userposts
        })
    }

    emptySearch = () => {
        this.setState({
            search: ''
        })
    }

    componentDidMount(){
        this.getPosts()
    }

    render() {
        // console.log(this.state)
        const displayPosts = this.state.posts.map((posts, i) => {
            return (
                <div>
                    <div key={i} className="displayPosts">
                        <Link to={`/post/${posts.postsid}`}>
                            {posts.title}
                            {posts.username}
                            {posts.profilePic}
                        </Link>
                    </div>
                </div>
            );
        })
        return (
            <div className="dash-main">
                <div className="searchInput">
                    <input
                        type="text"
                        onChange={(e) => this.storeSearchHandler(e)}
                        value={this.state.search}
                        />
                </div>
                    <img className="searchButton" src={searchIcon} alt="search-button" onClick={this.getPosts}/>
                    <button className="resetButton" onClick={this.emptySearch}>Reset</button>
                <div className="myPosts">
                    <p>My Posts</p>
                    <input
                        type="checkbox"
                        onClick={this.checkboxClickHandler}
                        defaultChecked
                        />
                </div>
                {displayPosts}
            </div>
        )
    }
}

// const mapStateToProps = state => state;

// export default connect( mapStateToProps )(Dashboard);

export default Dashboard;