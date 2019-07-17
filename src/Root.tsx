import React from 'react';
import Navigator from './Scene';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}
interface State {}

export default class Root extends React.Component<Props, State> {
  render() {
    return <Navigator />;
  }
}
