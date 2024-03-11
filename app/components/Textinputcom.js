import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import {  } from '../utils/AppStyles';


export default function Textinputcomp({
  name,
  placeholder,
  secureTextEntry,
  setTextState,
  keyBorardType,
  ref,
  type,
  editable,
  inputCustomStyle,
  value,
  maxLength,
}) {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <Text style={{ color: "black", paddingHorizontal: 14,fontWeight:"600" }}>{name}</Text>
      <TextInput
        style={[
          styles.textinput,
          { backgroundColor: "#F8F8F8", color:"#000000",borderColor:"#D7D7D7" },
          isFocused && { borderColor:"#605F9B" },
        ]}
        keyboardType={keyBorardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        editable={editable}
        maxLength={maxLength}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.04,
    borderRadius: 4,
    paddingHorizontal: 14,
    margin: 14,
    borderWidth: 2, 
    borderColor: 'black', 
  },
});
