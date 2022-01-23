import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = {comment:""}

    componentDidMount(){
        this.shouldNavigateAway();
    }

    componentDidUpdate(){
        this.shouldNavigateAway();
    }

    shouldNavigateAway(){
        if(!this.props.auth){
            setTimeout(() =>this.props.navigate('/', { replace: true }), 1);
        }
    }

    handleChange = event => {
        this.setState({comment: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ""});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea 
                        value={this.state.comment} 
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <CommentBox {...props} navigate={navigate} />
}

function mapStateToProps(state){
    return{auth: state.auth};
}

export default connect(mapStateToProps, actions)(WithNavigate)