import React from 'react';
// import { Provider } from 'react-redux';
import { Text, View, Image } from 'react-native';
// import store from '../common/redux/store';

import styles from './src/resources/styles/app';
import CommonApp, { reduxConnect } from '../common/super_containers/App';
import ReactImage from '../common/data/images/react.png';

class MainContainer extends CommonApp {
  componentWillMount() {

  }

  render() {
    const { user } = this.props.crud;
    // const user = {
    //   username: 'lanjara'
    // };

    console.log('dsvsdsdvsdvsdvsd', user);
    return (
      <View style={[styles.container]}>
        {user.username ? <Text style={styles.text}>{`Hello ${user.username}`}</Text> : <Text>Loading.. please wait!</Text>}
        <Image source={ReactImage} />
      </View>
    );
  }
}

export default reduxConnect(MainContainer);

// export default MainContainer;
