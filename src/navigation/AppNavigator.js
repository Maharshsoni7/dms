import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
import { NavigationScreens } from './NavigationUtils';
import Dashboard from '../features/dashboard';
import colors from '../utility/colors';
import SplashScreen from '../features/splash';


export function getCurrentRouteName() {
    return navigationRef?.current?.getCurrentRoute()?.name
}
export function navigate(name, params) {
    navigationRef?.current?.navigate(name, params);
}
const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    const navigationRef = createRef();
    const headerOptions = {
        headerTitleAlign: 'left',
        headerStyle: { backgroundColor: colors.inkBlue },
        headerTintColor: colors.white,
    }

    // const HomeStack = () => {
    //     return (
    //         <Stack.Navigator initialRouteName={NavigationScreens.dashboard}>
    //             <Stack.Screen
    //                 name={'DashBoard'}
    //                 component={Dashboard}
    //                 options={headerOptions}
    //             />
    //         </Stack.Navigator>
    //     )
    // }
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name={NavigationScreens.splash} options={{ headerShown: false }} component={SplashScreen} />
                <Stack.Screen name={NavigationScreens.dashboard} options={headerOptions} component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;