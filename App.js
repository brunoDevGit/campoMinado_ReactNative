import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'


// 18 x 12
export default class App extends Component {
  render()
  {
  return (
    <View style={styles.container}>
     
      <Field></Field>
      <Field opened></Field>
      <Field></Field>
      <Field label></Field>
      <Field opened ></Field>
      <Field opened nearMines={1} ></Field>
      <Field opened nearMines={2} ></Field>
      <Field opened nearMines={3} ></Field>
      <Field opened nearMines={7}></Field>
      
      
      

      
     
    </View>
    
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
