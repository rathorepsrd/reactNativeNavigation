import React from 'react'
import { Text, View } from 'react-native';

function Book(props) {
  return (
    <><View>
      <Text>{props.item.title}</Text>
    </View>
      
    </>
  )
}

export default Book
