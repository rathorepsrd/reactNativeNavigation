import React from 'react';
import { Text, View,  Button} from 'react-native';
const Feed = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed</Text>
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