import React from 'react'
import { View } from 'react-native'
import { First_Design } from './src/screens/First_Design'
import { Second_Design } from './src/screens/Second_Design';
import { Third_Design } from './src/screens/Third_Design';
import { Four_Design } from './src/screens/Four_Design';
import { Five_Design } from './src/screens/Five_design';
import { Six_Design } from './src/screens/Six_Design';
import { Seven_Design } from './src/screens/Seven_Design';
import { Eight_Design } from './src/screens/Eight_Screen';

export const App = () => {
  return (
    <View style={{flex:1}}>
        {/* <First_Design></First_Design> */}
        {/* <Second_Design/> */}
        {/* <Third_Design/> */}
        {/* <Four_Design/> */}
        {/* <Five_Design/> */}
        {/* <Six_Design></Six_Design> */}
        {/* <Seven_Design/> */}
      <Eight_Design></Eight_Design>
    </View>
  )
}
