import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Button,
    Pressable,
  } from 'react-native';
  import React, {} from 'react';
  import { AppFonts, MAIN_CARD_WIDTH} from '../utils/AppStyles';
  import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/AppStyles';

  export default function Appbutton({
    text,
    customStyles,
    onPress,
    disabled,
    loading,
  }) {
   
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {backgroundColor: disabled ? 'gray' : "red"},
          customStyles,
        ]}
      
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={'red'} size={'small'} />
        ) : (
          <Text style={[styles.textStyle, {color:"white"}]}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 18,
  
      fontFamily: AppFonts.regular,
    },
    container: {
      width: MAIN_CARD_WIDTH,
      height: WINDOW_HEIGHT * 0.055,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
  });
  