import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './TabsNavigator';
import CreateAssessment from '../screens/CreateAssessment'; // or wherever you store it

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* The main tabs */}
        <Stack.Screen 
          name="HomeTabs" 
          component={TabsNavigator} 
          options={{ headerShown: false }} 
        />
        {/* The CreateAssessment screen */}
        <Stack.Screen 
          name="CreateAssessment" 
          component={CreateAssessment} 
          options={{ title: 'New Assessment' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
