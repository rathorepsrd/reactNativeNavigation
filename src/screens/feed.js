import React from 'react';
import { Text, View,  Button, StyleSheet} from 'react-native';
import BookFeed from '../components/BookFeed';

const Feed = props => {
    return (
        <View style={{ padding: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text>Book Feed Data</Text>
            <BookFeed navigation={props.navigation} />
            <Button
                title="Read Book"
                onPress={() => props.navigation.navigate('Book')}
            />
        </View>
    );
};
//screen title
Feed.navigationOptions = {
    title: 'Feed'
};

export default Feed;