import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import Appheader from '../components/Appheader';

export default function Ratings() {
    const [stars, setstars] = useState()

    return (
        <View style={styles.container}>
            <Appheader
            name={'Feedback'}
            />
            <View style={{ flex: 1,  justifyContent: "center", alignItems: "center"}}>
            <StarRating
              rating={stars}
              onChange={setstars}
              starSize={60}
              emptyColor='#EFF0F6'
              color='#605F9B'
              
            />
            {/* <Text style={styles.ratingText}>Your Rating: {starCount} / 5</Text> */}
            <Text style={styles.title}>Thank you for your Feedback!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        marginTop: 20
    },
    ratingText: {
        fontSize: 20,
        marginTop: 20,
    },
});
