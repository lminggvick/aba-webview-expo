import React, {Component} from 'react';
import {PermissionsAndroid,} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor() {
    super();

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    );
  }

  render() {
    return (
      <WebView
        geolocationEnabled={true}
        javaScriptEnabled={true}
        useWebKit={false}
        source={{uri: 'https://abasystem.co.kr'}}
        onShouldStartLoadWithRequest={(event) => {
          if (event.url.includes('detail.php')) {
            console.log('load new page');
            this.props.navigation.navigate('Browser', {url: event.url});

            return false;
          }

          return true;
        }}
      />
    );
  }
}
