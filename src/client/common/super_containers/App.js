import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser } from '../redux/actions/crud';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getUser();
  }
}

App.defaultProps = {
  getUser: () => null,
};

App.propTypes = {
  getUser: PropTypes.func,
};

export default App;

//
// Redux connection
//

const mapStateToProps = state => ({
  crud: state.crud,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
});

export const reduxConnect = component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);
