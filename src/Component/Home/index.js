import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native'
import Navbar from '../Navbar/index'



function HomeScreen(props) {
    console.log(props)
    return (
        <ImageBackground source={require('../../Assets/Images/backgrounds.jpg')} style={styles.main}>
            <View style={styles.navbar}>
                <Navbar  />
            </View>

            <View style={styles.content}>
                <View style={styles.playerRegister}>
                    <TouchableOpacity style={styles.playerRegisterButton} onPress={()=>{
                        props.navigation.navigate('playerRegister')
                    }}>
                        <Text style={styles.playerRegisterButtonText}>ثبت بازیکن</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.resultRegister}>
                    <TouchableOpacity style={styles.resultRegisterButton}>
                        <Text style={styles.resultRegisterButtonText}>ثبت نتیجه</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                
            </View>
        </ImageBackground>)
}
export default  HomeScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbar: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center'
    },
    content: {
        flex:1,
        justifyContent:'center'

    },
    playerRegister: {
      flex:1,
        justifyContent: 'center',
    },
    playerRegisterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008cba',
        padding:30
    },
    playerRegisterButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ccc'
    },
    resultRegister: {
        flex: 1,
        height:100,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    resultRegisterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008cba',
        padding:30
    },
    resultRegisterButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ccc'
    },
    footer: {
        flex: 1,
    }
})