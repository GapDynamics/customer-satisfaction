import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Appheader from '../components/Appheader'
import Textinputcomp from '../components/Textinputcom'

export default function Guest() {
  const [employeeid, setEmpoyeeID] = useState('');

  return (
    <View style={{flex:1,backgroundColor:"#ffffff"}}>
            <Appheader
            name={"Identify Yourself"}
            
            />
            <View style={{ flex: 1,  justifyContent: "center", alignItems: "center" }}>
            <View style={styles.first}>
            <View style={{marginBottom:30,alignItems:"center",width:Dimensions.get('window').width * 0.45}}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#111827"}}>Welcome back!</Text>
                <Text  style={{color:"#111827"}}>Please login to access your account. </Text>
                </View >
                <Textinputcomp
                    name={"Employee ID"}
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
        height: Dimensions.get('window').height * 0.45,
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
        backgroundColor: "#004436",
        borderRadius: 32,
        alignItems: "center", justifyContent: "center",
        marginTop: 30
    }

})