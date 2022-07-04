import React from "react";
import {Text,Button, View} from "react-native";
import styles from "./styles";

export default function Details({navigation}){
    return(
        <View style = {styles.container}>
            <Text>{navigation.getParam("content")}</Text>
        </View>
    );
}

Details.navigationOptions = ({
    navigation,
    screenProps:{stock,updateStock}

    }) => {
        const id = navigation.getParam("id");
        const title = navigation.getParam("title");

        return {
            title,
            headerRight:
            ()=> <Button 
                title="Buy"
                onPress={()=>updateStock(id)}
                disabled = {stock[id] === 0}
            />
        };
    };

