import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const Challenges = ({ data }) => (
  <View>
    <Text style={styles.listTitle}>Challenges</Text>
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={itemData => {
        console.log(itemData.item)
        return (
          <ListItem
            name={itemData.item.name}
            days={itemData.item.days}
            workouts={itemData.item.workouts}
            level={itemData.item.level}
            uri={itemData.item.url}
          />
        )
      }}

    />
  </View>
);

const styles = StyleSheet.create({
  listTitle: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 20
  }
});

export default Challenges;
