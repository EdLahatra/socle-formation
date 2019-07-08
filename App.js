import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { Text, View, Image } from 'react-native';
// import store from '../common/redux/store';

import styles from './src/client/mobile/src/resources/styles/app';
// // import CommonApp, { reduxConnect } from '../common/super_containers/App';
import ReactImage from './src/client/common/data/images/react.png';

class MainContainer extends Component {
  componentWillMount() {

  }

  render() {
    // const { user } = this.props.crud;
    const user = {
      username: 'lanjara'
    };
    return (
      <View style={[styles.container]}>
        {user.username ? <Text style={styles.text}>{`Hello ${user.username}`}</Text> : <Text>Loading.. please wait!</Text>}
        <Image source={ReactImage} />
      </View>
    );
  }
}


// const App = () => (
//   <Provider store={store}>
//     <MainContainer />
//   </Provider>
// );

// export default reduxConnect(App);

export default MainContainer;
