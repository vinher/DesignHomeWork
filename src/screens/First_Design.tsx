import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

export const First_Design = () => {
  return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'blue',
      
    },

    box1:{
        width:100,
        height:100,
        backgroundColor:'orange',
       
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:'purple',
        flex:2
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:'green',

    }
});