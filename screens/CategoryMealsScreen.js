import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import CATEGORIES from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParams('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="Go to details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }}/>
            <Button title="replace with category" onPress={() => {
                props.navigation.replace({routeName: 'CategoryMeals'})
            }}/>
            <Button title="Go back" onPress={() => {
                props.navigation.pop();
            }}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;