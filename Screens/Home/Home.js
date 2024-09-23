import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import PostsScreen from '../PostsScreen/PostsScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // if (route.name === 'Home') {
          //   iconName = focused
          //     ? 'ios-information-circle'
          //     : 'ios-information-circle-outline';
          // } else if (route.name === 'Settings') {
          //   iconName = focused ? 'ios-list-box' : 'ios-list';
          // }

          if (route.name === 'ProfileScreen') {
            iconName = 'person';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = 'add';
          } else if (route.name === 'PostsScreen') {
            iconName = 'grid';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerTitleAlign: 'center',

          headerTintColor: '#111',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
          headerRight: () => (
            <Feather name="log-out" size={24} color="#BDBDBD" padding={15} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerTintColor: '#111',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Профіль',
          headerTitleAlign: 'center',
          headerTintColor: '#111',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
