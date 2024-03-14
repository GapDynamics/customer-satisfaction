import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect,useContext} from 'react'
export default function Splash({navigation}) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('AuthScreen');
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={[styles.container,{backgroundColor:"red"}]}>
      {/* <Image
        source={require('../assets/images/foodblck.png')}
        style={styles.logo}
        resizeMode="contain"
      /> */}
      <Text style={{color:"black",fontSize:22,fontWeight:"bold"}}>Smart Taps</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
})