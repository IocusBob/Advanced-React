import React, {Component} from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount(){
        this.shouldNavigateAway();
    }

    componentDidUpdate(){
        this.shouldNavigateAway();
    }

    shouldNavigateAway(){
        if(!this.props.auth){
            setTimeout(() =>this.props.navigate('/', { replace: true }));
        }
    }

      render() {
          return <ChildComponent {...this.props} />
      }
  }
  function WithNavigate(props) {
    let navigate = useNavigate();
    return <ComposedComponent {...props} navigate={navigate} />
}

function mapStateToProps(state){
    return{auth: state.auth};
}
  return connect(mapStateToProps)(WithNavigate)
};

export default requireAuth