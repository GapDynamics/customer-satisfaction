import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Image } from 'react-native';
import Appheader from '../components/Appheader';
import Textinputcomp from '../components/Textinputcom';

export default function Feedback(props) {
    const [selectedRating, setSelectedRating] = useState(null);
    const handleRatingPress = (rating) => {
        setSelectedRating(rating);
    };
    return (
        <View style={{ flex: 1 }}>
            <Appheader name={"Add Notes"} />
            <View style={styles.container}>
                <Text style={{ color: "black", fontWeight: "bold", fontSize: 30,alignSelf:"center", marginBottom:20}}>How satisfied are you with your overall experience today?</Text>
                <View style={{flexDirection:"row",width:Dimensions.get('window').width * 0.9,justifyContent:"space-between",paddingHorizontal:25}}>
                <TouchableOpacity onPress={() => handleRatingPress(1)}>
                        <View style={[styles.firstcontainer, selectedRating === 1 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/Worst.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Unsatisfactory</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRatingPress(2)}>
                        <View style={[styles.firstcontainer, selectedRating === 2 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/blow.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Below Exp</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => handleRatingPress(3)}>
                        <View style={[styles.firstcontainer, selectedRating === 3 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/average.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Average</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRatingPress(4)}>
                        <View style={[styles.firstcontainer, selectedRating === 4 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/good.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Good</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRatingPress(5)}>
                        <View style={[styles.firstcontainer, selectedRating === 5 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/excelent.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Excellent</Text>
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
        // marginTop: 60,
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
        borderWidth: 1,
        borderColor: "#666666",
        marginTop:50
      },
      selectedContainer: {
        borderColor: '#605F9B',
        backgroundColor: '#E5E4FF', // Light red background color
        opacity:5
      }
});
