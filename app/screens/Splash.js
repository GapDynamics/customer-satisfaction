import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions, PanResponder, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  const sliderWidth = Dimensions.get('window').width * 0.2;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSlideToStart = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').width,
      duration: 500,
      useNativeDriver: false, 
    }).start(() => {
      navigation.navigate('Language');
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        slideAnim.setValue(gestureState.dx);
        if (gestureState.dx > 50) {
          handleSlideToStart();
        }
      },
      onPanResponderRelease: () => {
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 100, 
          friction: 10,
          useNativeDriver: false,
        }).start();
      }
    })
  ).current;

  return (
    <>
      <StatusBar backgroundColor="#004436" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/shapes.png')} resizeMode="contain" />
        </View>
        <View style={styles.firstview}>
          <Image source={require('../assets/images/logowhite.png')} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.secondview}>
          <Text style={{ color: "#ffffff", fontSize: 45, fontWeight: "bold", bottom: 15 }}>DINE. REVIEW. REPEAT</Text>
          <Text style={{ color: "#ffffff", fontSize: 34, fontWeight: "200", bottom: 15 }}>Your Feedback is Valuable to us!</Text>
        </View>
        <View style={styles.thirdview}>
          <LinearGradient
            colors={['#FEFDFD', '#FEFDFD']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.letsgo, { width: sliderWidth }]}>
            <Animated.View {...panResponder.panHandlers} style={[styles.slide, { transform: [{ translateX: slideAnim }] }]}>
              <MaterialIcons name="keyboard-arrow-right" size={26} color={"#004436"} />
            </Animated.View>
            <Text style={{ color: "#004436", paddingHorizontal: 50,fontWeight:"bold",fontSize:18 }}>Slide to Start</Text>
          </LinearGradient>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#004436',
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  firstview: {
    height: Dimensions.get('window').height * 0.28,
    width: Dimensions.get('window').width * 1,
    alignItems: "center", justifyContent: "center",
  },
  secondview: {
    height: Dimensions.get('window').height * 0.36,
    width: Dimensions.get('window').width * 1,
    alignItems: "center", justifyContent: "center"
  },
  thirdview: {
    height: Dimensions.get('window').height * 0.36,
    width: Dimensions.get('window').width * 1,
    alignItems: "center"
  },
  logo: {
    bottom: 15
  },
  letsgo: {
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: "red",
    borderRadius: 32,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10
  },
  slide: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
