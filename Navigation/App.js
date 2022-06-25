import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./Home";
import Settings from "./Settings";
import Details from "./Details";

export default createAppContainer(
 createStackNavigator({ Home, Details,Settings}, { initialRouteName: "Home" })
);