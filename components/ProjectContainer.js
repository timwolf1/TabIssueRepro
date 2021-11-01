import React from 'react';
import Groups from '../components/Groups'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function ProjectContainer({navigation}) {
    return (
                        <Tab.Navigator screenOptions={{ headerShown: false }}>
                            <Tab.Screen
                                name="Groups"
                                component={Groups}
                                navigation={navigation}
                                />
                        </Tab.Navigator>
    );
}