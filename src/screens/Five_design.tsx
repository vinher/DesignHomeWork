import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

export const Five_Design = () => {
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
        flexDirection:'row'

    },

    box1:{
        width:100,
        height:'auto',
        backgroundColor:'orange',
        
    },
    box2:{
        height:'auto',
        width:100,
        backgroundColor:'purple',
        
    },
    box3:{
        height:'auto',
        width:100,
       
        backgroundColor:'green',
      
      
    }
});