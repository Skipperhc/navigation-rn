import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FilterScreen';
import Colors from '../constants/Colors';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBakTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailsScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoriteScreen,
        MealDetail: MealDetailsScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' 
            ? <Text style={{fontFamily: 'open-sans-bold'}} >Meals</Text>
            : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' 
            ? <Text style={{fontFamily: 'open-sans-bold'}} >Favorites</Text>
            : 'Favorites'
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans'
            },
            activeTintColor: Colors.accentColor
        }
    });

const FiltersNavigator = createStackNavigator(
    {
        Filters: FilterScreen
    },
    {
        // navigationOptions: {
        //     drawerLabel: 'Filters!!!!'
        // },
        defaultNavigationOptions: defaultStackNavOptions
    });

const MainNavigator = createDrawerNavigator(
    {
        MealFavs: {
            screen: MealsFavTabNavigator, navigationOptions: {
                drawerLabel: 'Meals favorite'
            }
        },
        Filters: FiltersNavigator
    },
    {
        contentOptions: {
            paddingVertical: 20,
            activeTintColor: Colors.primaryColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    });

export default createAppContainer(MainNavigator);