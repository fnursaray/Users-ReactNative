import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
