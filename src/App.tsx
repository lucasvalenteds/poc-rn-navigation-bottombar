import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BaseScreen} from './BaseScreen';

export interface AppScreenProps {
    text: string;
}

export enum AppScreen {
    First = "First",
    Second = "Second",
    Third = "Third",
}

export type AppScreens = {
    First: AppScreenProps;
    Second: AppScreenProps;
    Third: AppScreenProps;
}

export type BaseScreenRouteProp = 
    RouteProp<AppScreens, AppScreen.First> |
    RouteProp<AppScreens, AppScreen.Second> |
    RouteProp<AppScreens, AppScreen.Third>;

export type BaseScreenNavigationProp =
    BottomTabNavigationProp<AppScreens, AppScreen.First> |
    BottomTabNavigationProp<AppScreens, AppScreen.Second> |
    BottomTabNavigationProp<AppScreens, AppScreen.Third>;

const App: React.FC = (): React.ReactElement => {
  const Tab = createBottomTabNavigator<AppScreens>();

  return (
    <>
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen
                  name={AppScreen.First}
                  component={BaseScreen}
                  initialParams={{text: "1st screen"}}
              />
              <Tab.Screen
                  name={AppScreen.Second}
                  component={BaseScreen}
                  initialParams={{text: "2nd screen"}}
              />
              <Tab.Screen
                  name={AppScreen.Third}
                  component={BaseScreen}
                  initialParams={{text: "3rd screen"}}
              />
          </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
