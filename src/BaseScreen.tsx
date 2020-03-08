import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {AppScreen, BaseScreenRouteProp, BaseScreenNavigationProp} from './App';

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

export const BaseScreen: React.FC = () => {
    const route = useRoute<BaseScreenRouteProp>();
    const navigation = useNavigation<BaseScreenNavigationProp>();

    const onPress = () => {
        switch (route.name) {
            case AppScreen.First:
                navigation.navigate(AppScreen.Second);
            break;
            case AppScreen.Second:
                navigation.navigate(AppScreen.Third);
            break;
            case AppScreen.Third:
                navigation.navigate(AppScreen.First);
            break;
        }
    };

    return (
        <View style={style.view}>
            <Text style={style.text} onPress={onPress}>{route.params.text}</Text>
        </View>
    );
};
