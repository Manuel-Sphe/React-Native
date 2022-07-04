import { StyleSheet } from "react-native";

// this is more prefered style 
export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }, 

  buttonContainer:{
    //flexDirection:'row',
    //width:400,
    //height:100,
    marginTop:10,
    backgroundColor:'yellow',
    textAlign: 'center',
    fontWeight:'bold',
    justifyContent:'space-around'
  },

  textCol:{
    color:'black'
  }

});