import Projects from './components/Projects';
import Home from './components/Home';
import Groups from './components/Groups'
import ProjectContainer from './components/ProjectContainer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }} />
            <Stack.Screen
            name="Groups"
            component={Groups}
            />
            <Stack.Screen
              name="Projects"
              component={Projects}
              options={{
                headerShown: true
            }} />
            <Stack.Screen
              name="ActualProject"
              component={ProjectContainer} />            
          </Stack.Navigator>
        </NavigationContainer>
  );
}