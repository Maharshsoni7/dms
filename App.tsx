/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  );
}

export default App;
