import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Appheader from '../components/Appheader';
import { useNavigation } from '@react-navigation/native';
import Appbutton from '../components/Appbutton';

export default function Home(props) {
  const navigation = useNavigation();
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleContainerPress = (container) => {
    setSelectedContainer(container);
    if (container === 'Employee') {
      navigation.navigate('Employee');
    } else if (container === 'Guest') {
      navigation.navigate('Guest');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appheader />
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
    borderWidth: 1,
    borderColor: "#666666"
  },
  selectedContainer: {
    borderColor: '#605F9B',
    backgroundColor: '#E5E4FF', // Light red background color
    opacity:5
  }
});
