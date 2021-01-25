import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from '@/Stores';
import RootScreen from '@/Containers/Root/RootScreen';
import { StatusBar } from 'react-native';

const { store, persistor } = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
                    <RootScreen />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
