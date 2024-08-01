import React, {useLayoutEffect} from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {light} from './src/fixtures/colors.json';

const App = () => {
  useLayoutEffect(() => {
    try {
      Platform.OS === 'android' && changeNavigationBarColor(light.primary);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
