import { Platform,StyleSheet,StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor : "ghostwhite",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: 'navy',
        ...Platform.select({
            ios: { paddingTop :40 },
            android:{ paddingTop: StatusBar.currentHeight }
        })
    },

    box: {
       
         width: 100,
         height: 100,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "lightgray",
         borderWidth: 1,
         borderStyle: "dashed",
         borderColor: "darkslategray",
         margin : 10,
    

    },

    boxText: {
        fontFamily: "arial",
        color: "darkslategrey",
        fontWeight: "bold",
      
    
    },

    row:{
        flex:1,
        flexDirection : 'row',
        justifyContent: 'space-around',
        alignSelf:"stretch",
    },

    column:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-around',
        alignSelf: "stretch",
    },
});