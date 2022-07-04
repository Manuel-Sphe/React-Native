import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";


// 
export default function Home({ navigation , screenProps:{stock}}) {

    const val = Math.random()*100;
    return (
        <View style = {styles.container}>
            <Text>Home Page</Text>
            <Button 
                title={`First Item (${stock.first})`} 
                onPress={() => navigation.navigate("Details",{
                id:"first",
                title:"First Item",
                content:"First Item Content",
          
                })}
             /> 

            <Button 
                title={`Second Item (${stock.second})`}
                onPress={() => navigation.navigate("Details",{
                id:"second",
                title:"Second Item",
                content:"Second Item Content",
               
                })}
            />

            
            <Button 
               // title = {<Text>Hhs</Text>}
                title={`Third Item (${stock.third})`}
                onPress={() => navigation.navigate("Details",{
                id:"third",
                title:"Third Item",
                content:"Third Item Content",
            
                })}
            />

            <View style = {styles.buttonContainer}>
                <Button
                color={'black'}
                title="Settings" 
                onPress={() => navigation.navigate("Settings")}/>
            </View>
           
        </View>
    );
}

Home.navigationOptions = {
    title : "Home"
};