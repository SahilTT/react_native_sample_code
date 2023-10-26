/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from "./scr/navigation/AppNavigator"

const Stack = createStackNavigator();

function App() {
  return (
    <AppNavigator />
  );
}

export default App;