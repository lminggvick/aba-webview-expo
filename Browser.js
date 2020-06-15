import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Browser extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  render() {
    return (
      <View style={styles.container}>
        <WebView
          javaScriptEnabled={true}
          useWebKit={false}
          source={{uri: this.props.navigation.state.params.url}}
          style={{flex: 1}}
          requestFocus
        />
        <Text
          style={styles.test}
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          {'<'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    backgroundColor: 'rgba(255, 0, 0, 0)',
    padding: 0,
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 10,
    width: 30,
    fontSize: 35,
    zIndex: 30,
  },
});
