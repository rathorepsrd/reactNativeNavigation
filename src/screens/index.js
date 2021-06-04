import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Feed from './feed';
import Favorites from './favorites';
import MyBooks from './mybooks';
import BookScreen from './book';
//stacked navivator
const FeedStack = createStackNavigator({
  Feed: Feed,
  Book: BookScreen
});
const MyBooksStack = createStackNavigator({
  MyBooks: MyBooks,
  Book: BookScreen
});
const FavoritesStack = createStackNavigator({
  Favorites: Favorites,
  Book: BookScreen
});
const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: () => (<MaterialCommunityIcons name="home" size={24} color="black" />)
    }
  },
  MyBooksScreen: {
    screen: MyBooksStack,
    navigationOptions: {
      tabBarLabel: 'My Books',
      tabBarIcon: () => (<MaterialIcons name="library-books" size={24} color="black" />)
    }
  },
  FavoriteScreen: {
    screen: FavoritesStack,
    navigationOptions: {
      tabBarLabel: 'Favorites new',
      tabBarIcon: () => (<MaterialCommunityIcons name="star" size={24} color={'black'} />)
    }
  }
});
export default createAppContainer(TabNavigator);
