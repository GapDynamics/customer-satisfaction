import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Image } from 'react-native';
import Appheader from '../components/Appheader';
import Textinputcomp from '../components/Textinputcom';
import Logoheader from '../components/Logoheader';

export default function Feedback(props) {
    const [selectedRating, setSelectedRating] = useState(null);
    const [submitReview, setSubmitReview] = useState(false);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState([]);
    const handleRatingPress = (rating) => {
       
        const payload={
            "questionNumber":questionNumber+1,
            "review_id":review.id,
            "answerId":rating
        }
        setAnswers(prevList=>[...prevList,payload])
        if(questionNumber< review.questions.length-1){
            setQuestionNumber(prev=>prev+1);
       
            console.log('questionNumber', questionNumber)
        }else{
            setSelectedRating(rating);
            setSubmitReview(true);
         
        }

    };
   

    useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://44b2-2407-d000-a-96b1-d851-c3e5-cd83-7612.ngrok-free.app/api/active-review-questions');
        const json = await response.json();
        setReview(json.data);
        setLoading(false);
        console.log('json', json.data)
      } catch (error) {
        setLoading(false);

        console.error('Error fetching data:', error);
      }
    };
    const submitMyReview = async()=>{
        console.log('answers', answers)
    }
    return (
        <View style={{ flex: 1,backgroundColor:"#ffffff" }}>
               <Logoheader icn={"keyboard-backspace"} value={2}
            // isLogo={true}
            name={"Feedback"}
         
            />
            {
                loading?null:
            
            <View style={styles.container}>
                

             <Text style={{ color: "black", fontWeight: "bold", fontSize: 30,alignSelf:"center", marginBottom:20}}>{review.questions[questionNumber]["title"]}</Text>
                        
                <View style={{flexDirection:"row",width:Dimensions.get('window').width * 0.9,justifyContent:"space-between",paddingHorizontal:25}}>
                <TouchableOpacity onPress={() => handleRatingPress(1)}>
                        <View style={[styles.firstcontainer, selectedRating === 1 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/worst1.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Unsatisfactory</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRatingPress(2)}>
                        <View style={[styles.firstcontainer, selectedRating === 2 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/blow1.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Below Exp</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => handleRatingPress(3)}>
                        <View style={[styles.firstcontainer, selectedRating === 3 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/average1.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Average</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRatingPress(4)}>
                        <View style={[styles.firstcontainer, selectedRating === 4 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/good1.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Good</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRatingPress(5)}>
                        <View style={[styles.firstcontainer, selectedRating === 5 && styles.selectedContainer]}>
                        <Image source={require('../assets/images/excelent1.png')} />
                        <Text style={{ marginTop: 15, fontSize: 20, color: "#000000" }}>Excellent</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
}
{
    submitReview?<TouchableOpacity onPress={()=>submitMyReview()}><Text>submit</Text></TouchableOpacity>:null
}
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
