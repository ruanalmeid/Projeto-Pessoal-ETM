import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  StyleSheet,
} from 'react-native';

import MainStack from './assets/navigator/MainStack'

export default function App() {
  return (
    <NavigationContainer style={styles.backGralld}>
      <MainStack />
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  backGralld:{
    backgroundColor: '#f0f0f0',
    
  }
})