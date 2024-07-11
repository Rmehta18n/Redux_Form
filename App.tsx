import FlashMessage from 'react-native-flash-message';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import { View } from 'react-native';
import React from 'react';


function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigation />
        <FlashMessage position={'top'} />
      </Provider>
    </View>
  );
}


export default App;
