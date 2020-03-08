import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {BaseScreenRouteProp, BaseScreenNavigationProp} from './App';

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
            case "First":
                navigation.navigate("Second");
            break;
            case "Second":
                navigation.navigate("Third");
            break;
            case "Third":
                navigation.navigate("First");
            break;
        }
    };

    return (
        <View style={style.view}>
            <Text style={style.text} onPress={onPress}>{route.params.text}</Text>
        </View>
    );
};
