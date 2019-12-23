import React from 'react'
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native'

function Navbar(){
return(<View style={styles.main}><Text>navbar</Text></View>)
}
export default Navbar;

const styles = StyleSheet.create({
    main: {
        height:50,
        backgroundColor:'#000',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
});