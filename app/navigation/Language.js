import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logoheader from '../components/Logoheader';
export default function Language(props) {
    const navigation = useNavigation();
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingPress = (rating) => {
        setSelectedRating(rating);
    };

    const navigateToNextScreen = (language) => {
        if (language === 'English') {
            navigation.navigate("Home");
        } else if (language === 'Hindi') {
            navigation.navigate("Letsgo");
        } else if (language === 'Arabic') {
            navigation.navigate("Splash");
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor:"#ffffff" }}>
              <Logoheader icn={"keyboard-backspace"} value={1}
            isLogo={true}
            // name={"Feedback"}
            isLast={true}
            // Profilename={"Dev Moaz"}
          
            />
            <View style={styles.container}>
                <Text style={{ color: "black", fontWeight: "bold", fontSize: 30, alignSelf:"center", marginBottom:20}}>How satisfied are you with your overall experience today?</Text>
                <View style={{ flexDirection:"row", width:Dimensions.get('window').width * 0.55, justifyContent:"space-between", paddingHorizontal:25 }}>
                    <TouchableOpacity onPress={() => { handleRatingPress(1); navigateToNextScreen('English'); }}>
                        <View style={[styles.firstcontainer, selectedRating === 1 && styles.selectedContainer]}>
                            <Image source={require('../assets/images/eng.png')} />
                            <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>English</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleRatingPress(2); navigateToNextScreen('Hindi'); }}>
                        <View style={[styles.firstcontainer, selectedRating === 2 && styles.selectedContainer]}>
                            <Image source={require('../assets/images/hindi.png')} />
                            <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>हिंदी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleRatingPress(3); navigateToNextScreen('Arabic'); }}>
                        <View style={[styles.firstcontainer, selectedRating === 3 && styles.selectedContainer]}>
                            <Image source={require('../assets/images/arabic.png')} />
                            <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>عربي</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 20,
        alignSelf: "center",
        justifyContent:"center",
        alignItems:"center"
    },
    firstcontainer: {
        height: Dimensions.get('window').height * 0.28,
        width: Dimensions.get('window').width * 0.15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#F4F4F5",
        marginTop:50,
        borderWidth: 1,
        borderColor: "#666666",
    },
    selectedContainer: {
        borderColor: '#004436',
        borderWidth: 2, 
        backgroundColor: '#C6DBD7', 
    },
    unselectedContainer: {
        borderWidth: 0, 
        borderColor: 'transparent', 
    }
});
