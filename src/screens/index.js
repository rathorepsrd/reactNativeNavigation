import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Feed from './feed';
import Favorites from './favorites';
import MyBooks from './mybooks';
const TabNavigator = createBottomTabNavigator({
  MyBooksScreen: {
    screen: MyBooks,
    navigationOptions: {
        tabBarLabel: 'My Books',
    }
  },
    FeedScreen: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
        }
    },

    FavoriteScreen: {
      screen: Favorites,
      navigationOptions: {
          tabBarLabel: 'Favorites',
      }
  }
});
export default createAppContainer(TabNavigator);