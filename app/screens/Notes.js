import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Appheader from '../components/Appheader';
import Textinputcomp from '../components/Textinputcom';
import Logoheader from '../components/Logoheader';

export default function Notes(props) {
    const [notes, setNotes] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmission = () => {
        // Handle submission logic here
        console.log("Notes submitted:", notes);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <KeyboardAvoidingView
            style={{flex: 1, backgroundColor: "#ffffff"}}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100} // Adjust this value as needed
        >
            <View style={{flex: 1}}>
            <Logoheader icn={"keyboard-backspace"} value={1}
            // isLogo={true}
            name={"Feedback"}
            isLast={true}
            Profilename={"Dev Moaz"}
          imageUrl={require('../assets/images/profile1.png')}
            />
                <View style={styles.container}>
                    <Text style={{ color: "black", paddingHorizontal: 14, fontWeight: "600" }}>Notes</Text>
                    <TextInput
                        style={[
                            styles.textinput,
                            { backgroundColor: "#FFFFFF", color: "#000000", borderColor: "#D7D7D7" },
                            isFocused && { borderColor: "#605F9B" },
                        ]}
                        placeholder='If you have any additional feedback, please type it in here...hlo world'
                        onChangeText={text => setNotes(text)}
                        multiline
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        textAlignVertical='top'
                    />
                </View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Ratings')} style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={{ color: "#ffffff" }}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginHorizontal: 20,
        alignSelf: "center",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    button: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.045,
        backgroundColor: "#004436",
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },
    textinput: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.1,
        borderRadius: 4,
        paddingHorizontal: 14,
        margin: 14,
        borderWidth: 2,
        borderColor: 'black',
    },
});
