import React from "react";
import {Text,Button, View} from "react-native";
import styles from "./styles";

export default function Details({navigation}){
    return(
        <View style = {styles.container}>
            <Text>{navigation.getParam("title")}</Text>
        </View>
    );
}