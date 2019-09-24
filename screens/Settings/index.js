import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';

const SettingsTabs = createBottomTabNavigator({
    CPU: {
        screen: CPUScreen,
        navigationOptions: {
            title: "CPU",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "Memory",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});


// const settingNavigator = createStackNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });

// tabNavigator.path = '';

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });