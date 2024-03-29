import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

export default function Logoheader({ name, icn, value, isLogo,isLast,Profilename,imageUrl }) {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row" }}>
                {/* <View style={{
                    height: Dimensions.get('window').height * 0.15,
                    width: Dimensions.get('window').width * 0.05,
                    backgroundColor: "#ffffff",
                    alignItems: "center", justifyContent: "center"
                }}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <MaterialIcons name={icn} size={30} color={'#000000'} />
                    </TouchableOpacity>
                </View> */}
                <View style={styles.header1}>
                <TouchableOpacity onPress={handleGoBack}>
                        <MaterialIcons name={icn} size={30} color={'#000000'} />
                    </TouchableOpacity>
                    {isLogo ? (
                        <TouchableOpacity onPress={() => navigation.navigate("Test")}>
                            <Image source={require('../assets/images/applogo.png')}
                                style={{
                                    // height: Dimensions.get('window').height * 0.16,
                                    width: Dimensions.get('window').width * 0.08,
                                    resizeMode: "contain"
                                }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <Text style={{ fontSize: 25, color: "#000000", fontWeight: "bold",}}>{name}</Text>
                    )}
                         <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center" }}>
                            <Text style={{color:"#000000"}}>{Profilename}</Text>
                            <Image source={imageUrl}
                                style={{
                                    height: 20,
                                    width: 20,
                                    resizeMode: "contain",
                                    marginLeft: 10
                                }}
                            />
                        </View>
                </View>
            </View>

            <Slider
                style={{ width: "100%", height: 50 }}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#004436"
                maximumTrackTintColor="#004436"
                thumbTintColor='#004436'
                value={value || 0.1}
                onValueChange={value => setRange(value)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#ffffff",
        height: Dimensions.get('window').height * 0.12,
        width: Dimensions.get('window').width * 1,
        // paddingHorizontal: 25,
    },
    header1: {
        height: Dimensions.get('window').height * 0.15,
        width: Dimensions.get('window').width * 1, 
        backgroundColor: "#ffffff",
        alignItems: "center", 
        justifyContent: "space-between",
        flexDirection:"row",
        paddingHorizontal:25
        
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
