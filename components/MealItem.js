import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.MealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.MealRow, ...styles.MealHeader }}>
                        <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.MealRow, ...styles.MealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10,
        overflow: 'hidden'
    },
    MealRow: {
        flexDirection: 'row'
    },
    MealHeader: {
        height: '85%'
    },
    MealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }
});

export default MealItem;