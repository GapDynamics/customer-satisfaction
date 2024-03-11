import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Appheader from '../components/Appheader'
import Textinputcomp from '../components/Textinputcom'

export default function Employee() {
    return (
        <View style={{flex:1}}>
            <Appheader />
            <View style={{ flex: 1,  justifyContent: "center", alignItems: "center" }}>
            <View style={styles.first}>
                <Textinputcomp
                    name={"Your Name"}
                />
                <Textinputcomp
                    name={"Company Name"}
                />
                <View style={styles.button}>
                    <Text style={{ color: "#ffffff" }}>Login</Text>
                </View>
            </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        height: Dimensions.get('window').height * 0.47,
        width: Dimensions.get('window').width * 0.45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#666666"
    },
    button: {
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.04,
        backgroundColor: "#605F9B",
        borderRadius: 9,
        alignItems: "center", justifyContent: "center",
        marginTop: 25
    }

})