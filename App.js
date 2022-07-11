
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PetInfoScreen from './src/screens/PetInfoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  // make js file with all up to date pet info
  // make basic loading effect for pet info page

  // refine styles to make app look more cartoony later with outlines?

  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
        name="Home"
        component={HomeScreen} 
        />
        <Stack.Screen name="Pet Info" component={PetInfoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
