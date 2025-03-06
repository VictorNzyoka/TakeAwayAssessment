import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import StudentScreen from '../screens/StudentScreen';
import AssessmentScreen from '../screens/AssessmentScreen';
import ClassScreen from '../screens/ClassScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'gold',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Student" 
        component={StudentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Assessment" 
        component={AssessmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assessment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Class" 
        component={ClassScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="class" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Attendance" 
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
