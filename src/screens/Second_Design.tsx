import React from 'react'
import { View , Text, StyleSheet} from 'react-native'


export const Second_Design = () => {
  return (

    <View style={styles.container}>
    <View style={styles.box1     }></View>
    <View style={styles.box2     }></View>
    <View style={styles.box3     }></View>
</View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent: 'center'
            
    },

    box1:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth:10,
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10
    },
    box3:{
        width:'auto',
        height:100,
        backgroundColor:'green',
        borderWidth:10
    }
});