import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Text, ImageBackground, Switch, Slider, DatePickerIOS, PickerIOS } from 'react-native'
import Navbar from '../Navbar/index'
import Form from 'react-native-form'


function PlayerRegisterScreen() {
    const [date, setDate] = useState(new Date());
    const [showDatePicker,setShowDatePicker]=useState(false);
    return (<View style={styles.main}>
        <View style={styles.navbar}>
            <Navbar />
        </View>
        <Form style={styles.content}>
            <View style={styles.formItems}>
                <View style={styles.formRightItems}>
                    <Text>نام :</Text>
                </View>
                <View style={styles.formLeftItems}>
                    <TextInput style={styles.textInput} type="TextInput" name="myTest" />
                </View>
            </View>
            <View style={styles.formItems}>
                <View style={styles.formRightItems}>
                    <Text>نام خانوادگی :</Text>
                </View>
                <View style={styles.formLeftItems}>
                    <TextInput style={styles.textInput} type="TextInput" name="myTest" />
                </View>
            </View>
            <View style={styles.formItems}>
                <View style={styles.formRightItems}>
                    <Text>شرایط؟</Text>
                </View>
                <View style={styles.formLeftItems}>
                    <Switch type="Switch" name="mysdfsdf" />
                </View>
            </View >
            <View style={styles.formItems}>
                <View style={styles.formRightItems}>
                    <Text>تاریخ تولد</Text>
                </View>
                <View style={styles.formLeftItems}>
                    <DatePickerIOS mode='date' date={date} type="DatePickerIOS" name="myDate" />
                </View>
            </View>
            <View style={styles.formItems}>
                <View style={styles.formRightItems}>
                    <Text>جنسیت :</Text>
                </View>
                <View style={styles.formLeftItems}>
                    <PickerIOS type="PickerIOS" name="myPicker" />
                </View>

            </View>
        </Form>
        <View style={styles.footer}></View>
    </View>)
}
export default PlayerRegisterScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
    },
    navbar: {
        height: 30
    },
    content: {
        flex: 15,
        justifyContent: 'center'
    },
    formItems: {
        height: 50,
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'center'
    },
    formRightItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    formLeftItems: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '90%',
        height: '80%'
    },
    footer: {
        flex: 1,
    }
})