import React from 'react';

import CommonApp, { reduxConnect } from '../common/super_containers/App';

import ReactImage from '../common/data/images/react.png';

class App extends CommonApp {
  render() {
    const { user } = this.props.crud;
    return (
      <div>
        {user.username ? <h1>{`Hello ${user.username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}

export default reduxConnect(App);
