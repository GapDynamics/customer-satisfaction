import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logoheader from '../components/Logoheader';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Letsgo(props) {
    const navigation = useNavigation();
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingPress = (rating) => {
        setSelectedRating(rating);
    };

    const navigateToNextScreen = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Logoheader icn={"keyboard-backspace"} />
            <View style={styles.container}>
                <Image source={require('../assets/images/coment.png')} />
                <View style={{ alignItems: "center", width: Dimensions.get('window').width * 0.45 }}>
                    <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold", color: "#004436" }}>Your feedback is Valuable to us!</Text>
                    <Text style={{ fontSize: 16, color: "#111827", marginTop: 5 }}>Please slide to Start</Text>
                </View >
                <LinearGradient
                    colors={['#004436', '#004436']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.letsgo}>
                    <View style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "red",
                        borderRadius: 15, alignItems: "center", justifyContent: "center",
                        backgroundColor: "#ffffff"

                    }}>
                        <MaterialIcons name="keyboard-arrow-right" size={26} color={"#004436"} />
                    </View>
                    <Text style={{ color: "#ffffff" }}>Lets Start</Text>

                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    firstcontainer: {
        height: Dimensions.get('window').height * 0.28,
        width: Dimensions.get('window').width * 0.15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F4F5",
        marginTop: 50,
        borderWidth: 1,
        borderColor: "#666666",
    },
    letsgo: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.04,
        backgroundColor: "red",
        marginTop: 30, borderRadius: 32,
        alignItems: "center", justifyContent: "center",
        flexDirection: "row"
    },


});
