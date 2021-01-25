import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '@/Containers/Main/MainScreen';

const MainNavigator = createStackNavigator(
    {
        MainScreen: MainScreen,
    },
    {
        initialRouteName: 'MainScreen',
        headerMode: 'none',
    },
);

export const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            HomeMain: { screen: MainNavigator },
        },
        {
            initialRouteName: 'HomeMain',
        },
    ),
);
