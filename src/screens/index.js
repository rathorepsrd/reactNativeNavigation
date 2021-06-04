import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Feed from './feed';
import Favorites from './favorites';
import MyBooks from './mybooks';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: () => ( <MaterialCommunityIcons name="home" size={24} color="black" /> )
    }
  },
  MyBooksScreen: {
    screen: MyBooks,
    navigationOptions: {
      tabBarLabel: 'My Books',
      tabBarIcon: () => (<MaterialIcons name="library-books" size={24} color="black" />)
    }
  },
  FavoriteScreen: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: () => (<MaterialCommunityIcons name="star" size={24} color={'black'} />)
    }
  }
});
export default createAppContainer(TabNavigator);