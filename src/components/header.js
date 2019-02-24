// import library
import React from 'react';
import { Text, View } from 'react-native';


//we will make components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
  <View style={viewStyle}>
   <Text style={textStyle} >{props.headerText}</Text>
   </View>
 );
};
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 5,
   shadowColor: '#000',
    shadowoffset: { width: 0, height: 5 },
  elevation: 5,
   shadowOpacity: 10


  },
  textStyle: {
    fontSize: 30
  }
};

// make the component available
export default Header;
