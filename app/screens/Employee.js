import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Appheader from '../components/Appheader'
import Textinputcomp from '../components/Textinputcom'
import Logoheader from '../components/Logoheader';

export default function Employee(props) {
  const [name, setName] = useState('');
  const [companyname, setcompanyName] = useState('');


    return (
        <View style={{flex:1,backgroundColor:"#ffffff"}}>
               <Logoheader icn={"keyboard-backspace"} value={2}
            isLogo={true}
            // name={"Feedback"}
         
            />
            <View style={{ flex: 1,  justifyContent: "center", alignItems: "center" }}>
            <View style={styles.first}>
                <View style={{marginBottom:30,alignItems:"center",width:Dimensions.get('window').width * 0.45}}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#111827"}}>Welcome back!</Text>
                <Text  style={{color:"#111827"}}>Please login to access your account. </Text>
                </View >
                <Textinputcomp
                    name={"Your Name"}
                />
                <Textinputcomp
                    name={"Company Name"}
                />
                <TouchableOpacity onPress={()=> props.navigation.navigate('Feedback')}>
                <View style={styles.button}>
                    <Text style={{ color: "#ffffff" }}>Login</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        height: Dimensions.get('window').height * 0.56,
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