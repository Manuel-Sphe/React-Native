import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React,{useState} from "react";
import Home from "./Home";
import Settings from "./Settings";
import Details from "./Details";

const Nav =  createAppContainer(
 createStackNavigator({ Home, Details,Settings}, { initialRouteName: "Home" })
);

export default function App(){
    
    const [stock,setStock] = useState({
        first:Math.floor(Math.random()*12)+1, // from 1 to 12
        second:Math.floor(Math.random()*100)+1,
        third:Math.floor(Math.random()*1000)+1,
    });



    const updateStock = (id) =>{
        setStock({...stock,[id]:stock[id]===0? 0 : stock[id] -1})
    }

    return <Nav screenProps={{stock,updateStock}}/>
}