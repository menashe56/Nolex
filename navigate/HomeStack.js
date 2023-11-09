import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home.js';
import SecondTab from '../screens/SecondTab.js';
import QwesTab from '../screens/QwesTab.js';
import Homee from '../screens/homee.js';

const screens = {
    Homee : {
        screen: Homee,
    },
    SecondTab: {
        screen: SecondTab
    },
    QwesTab: {
        screen: QwesTab
    }
}
const  HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: 'white'}
    }
});

export default createAppContainer(HomeStack)