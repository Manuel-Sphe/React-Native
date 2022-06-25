import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";


// 
export default function Home({ navigation }) {
    return (
        <View style = {styles.container}>
            <Text>Home Page</Text>
            <Button title="First Item" onPress={() => navigation.navigate("Details",{title:"First Item"})} /> 
            <Button title="Second Item" onPress={() => navigation.navigate("Details",{title:"Second Item"})}/>
            <Button title="Third Item" onPress={() => navigation.navigate("Details",{title:"Third Item"})}/>
            <Button title="Settings" onPress={() => navigation.navigate("Settings")}/>
        </View>
    );
}