import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav (props){
    // console.log(props)
    return(
        <div>
            <ul>
                <Link to="/dashboard"><button className="navbuttons">Home</button></Link>
                <Link to="/new"><button className="navbuttons">New Post</button></Link>
                <Link to="/"><button className="navbuttons">Logout</button></Link>
            </ul>
        </div>
    )
}

const mapStateToProps = state => state;

export default connect( mapStateToProps )(Nav);