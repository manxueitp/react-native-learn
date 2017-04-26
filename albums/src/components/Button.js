import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress , children}) => {

  const {buttonStyle,textStyle} = styles;
  return(
    <TouchableOpacity onPress = {onPress} style = {buttonStyle} >
      <Text style= {textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle:{
    fontSize:16,
    color:'#007aff',
    alignSelf: 'center',
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop:10
  },
  buttonStyle: {
    flex:1,
    backgroundColor:'#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth:2,
    marginLeft: 5,
    marginRight:5,
    alignSelf: 'stretch',
    justifyContent:'center'
  }

}
export default Button;
