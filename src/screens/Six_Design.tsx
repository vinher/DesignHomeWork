import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

export const Six_Design = () => {
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
        flexDirection:'column'
    },

    box1:{
        flex:1,

        height:'auto',
        backgroundColor:'orange',
        
    },
    box2:{
        flex:2,
        backgroundColor:'purple',
        
    },
    box3:{
        flex:3,
        backgroundColor:'green',
      
      
    }
});