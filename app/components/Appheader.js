import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Appheader() {
    const navigation = useNavigation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const languages = ['Urdu', 'English', 'Hindi'];

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <View style={styles.header}>
            <View style={styles.header1}>
                <TouchableOpacity onPress={handleGoBack}>
                    <MaterialIcons name="keyboard-backspace" size={30} color={'#000000'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "#000000", fontWeight: "bold" }}>Identity Yourself</Text>
                <TouchableOpacity style={styles.strings} onPress={() => setIsDropdownOpen(true)}>
                    <Text style={{ color: "#ffffff" }}>{selectedLanguage}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color={"#ffffff"} />
                </TouchableOpacity>
            </View>
            <Modal
                visible={isDropdownOpen}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setIsDropdownOpen(false)}
            >
                <View style={styles.modalContainer}>
                    {languages.map((language, index) => (
                        <TouchableOpacity key={index} style={styles.languageItem} onPress={() => handleLanguageSelect(language)}>
                            <Text style={styles.languageText}>{language}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>
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
        borderRadius: 50
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageItem: {
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
    },
    languageText: {
        fontSize: 16,
        color: '#000000',
    },
});
