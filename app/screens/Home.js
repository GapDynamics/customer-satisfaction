import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Appheader from '../components/Appheader';
import { useNavigation } from '@react-navigation/native';
import Appbutton from '../components/Appbutton';
import Logoheader from '../components/Logoheader';
import Feedback from './Feedback';

export default function Home(props) {
  const navigation = useNavigation();
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleContainerPress = (container) => {
    setSelectedContainer(container);
    if (container === 'Employee') {
      navigation.navigate('Guest');
    } else if (container === 'Guest') {
      navigation.navigate('Employee');
    }
  };

  return (
    <View style={{ flex: 1,backgroundColor:"#ffffff" }}>
            <Logoheader icn={"keyboard-backspace"} value={2}
            isLogo={true}
            // name={"Feedback"}
         
            />
      
      <View style={{ flex: 1, flexDirection: "row", margin: 10, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => handleContainerPress('Employee')}>
          <View style={[styles.firstcontainer, selectedContainer === 'Employee' && styles.selectedContainer]}>
            <Image source={require('../assets/images/profile.png')} />
            <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Employee</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleContainerPress('Guest')}>
          <View style={[styles.firstcontainer, selectedContainer === 'Guest' && styles.selectedContainer, { marginHorizontal: 15 }]}>
            <Image source={require('../assets/images/profile.png')} />
            <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Guest</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstcontainer: {
    height: Dimensions.get('window').height * 0.45,
    width: Dimensions.get('window').width * 0.25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#C6DBD7', 
    marginHorizontal: 5 
  },
  selectedContainer: {
    borderColor: '#004436', 
    borderWidth: 2, 
  }
});
