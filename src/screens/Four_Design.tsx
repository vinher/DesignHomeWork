import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

export const Four_Design = () => {
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
        justifyContent:'space-between',
    },

    box1:{
        width:100,
        height:100,
        backgroundColor:'orange',
        alignSelf:'flex-end'
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:'purple',
        alignSelf:'center'
        
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:'green',
      
      
    }
});