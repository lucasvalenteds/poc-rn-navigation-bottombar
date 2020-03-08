import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {BaseScreenRouteProp} from './App';

export const BaseScreen: React.FC = () => {
    const route = useRoute<BaseScreenRouteProp>();
    const style = StyleSheet.create({
        view: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
        },
        text: {
            textAlign: "center",
            fontSize: 24,
        }
    });
    return (
        <View style={style.view}>
            <Text style={style.text}>{route.params.text}</Text>
        </View>
    );
};
