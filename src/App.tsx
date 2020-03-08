import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BaseScreen} from './BaseScreen';

export interface AppScreenProps {
    text: string;
}

export type AppScreens = {
    First: AppScreenProps,
    Second: AppScreenProps,
    Third: AppScreenProps,
}

export type BaseScreenRouteProp = 
    RouteProp<AppScreens, "First"> |
    RouteProp<AppScreens, "Second"> |
    RouteProp<AppScreens, "Third">;

export type BaseScreenNavigationProp =
    BottomTabNavigationProp<AppScreens, "First"> |
    BottomTabNavigationProp<AppScreens, "Second"> |
    BottomTabNavigationProp<AppScreens, "Third">;

const App: React.FC = (): React.ReactElement => {
  const Tab = createBottomTabNavigator<AppScreens>();

  return (
    <>
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen
                  name={"First"}
                  component={BaseScreen}
                  initialParams={{text: "First screen"}}
              />
              <Tab.Screen
                  name={"Second"}
                  component={BaseScreen}
                  initialParams={{text: "Second screen"}}
              />
              <Tab.Screen
                  name={"Third"}
                  component={BaseScreen}
                  initialParams={{text: "Third screen"}}
              />
          </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
