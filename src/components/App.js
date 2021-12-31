import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton(){
        if(this.props.auth){
            return(
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            )
        }
    };

    renderHeader(){
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a Comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    };

    render(){
        return (
            <div>
                {this.renderHeader()}
                <Routes>
                    <Route exact path="/post" element={<CommentBox />} />
                <   Route exact path="/" element={<CommentList />} />
                </Routes>
            </div>
        )
    }
};

function mapStateToProps(state){
    return { auth: state.auth }
};

export default connect(mapStateToProps, actions)(App);
