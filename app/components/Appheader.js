import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
export default function Appheader({name}) {
    const navigation = useNavigation();
    const[range,setRange] = useState('50%');
    const [sliding, setSliding] = useState("Inactive")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const languages = ['Urdu', 'English', 'Hindi'];
    const stringsRef = useRef(null);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    const toggleDropdownOnIconPress = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <View style={styles.header}>
            <View style={styles.header1}>
                <TouchableOpacity onPress={handleGoBack}>
                    <MaterialIcons name="keyboard-backspace" size={30} color={'#000000'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "#000000", fontWeight: "bold" }}>{name}</Text>
                <TouchableOpacity style={styles.strings} onPress={toggleDropdownOnIconPress} ref={stringsRef}>
                    <Text style={{ color: "#ffffff" }}>{selectedLanguage}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color={"#ffffff"} />
                </TouchableOpacity>
            </View>
            {isDropdownOpen && (
                <View style={[styles.dropdownContainer, { top: Dimensions.get('window').height * 0.032 + 50, width: '10%' }]}>
                    {languages.map((language, index) => (
                        <TouchableOpacity key={index} style={styles.languageItem} onPress={() => handleLanguageSelect(language)}>
                            <Text style={styles.languageText}>{language}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#004436"
                maximumTrackTintColor="#004436"
                thumbTintColor='#004436'
                value={.5}
                onValueChange={value => setRange(value)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#ffffff",
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 1,
        paddingHorizontal: 25,
    },
    header1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    },
    strings: {
        backgroundColor: "#605F9B",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 50,
        height: 30
    },
    dropdownContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "flex-end",
        height: Dimensions.get('window').height * 0.15,
        // marginLeft:"95%",
        // marginTop: 20, // Adjust as needed
        // marginRight: 10, // Adjust as needed
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000' // Black border
    },
    languageItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    languageText: {
        fontSize: 16,
        color: '#000000',
    },
});
