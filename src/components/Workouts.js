import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import WorkOutItem from './WorkOutItem';

const data = [
  {
    id: 1,
    url:
      'https://www.kingofthegym.com/wp-content/uploads/2012/11/benefits-of-deadlifting.jpg',
    title: 'Dead lifts',
    time: '00:30',
    times: '10 x',
  },
  {
    id: 2,
    url:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_439173466-760x506.jpg',
    title: 'Push ups',
    time: '00:30',
    times: '10 x',
  },
  {
    id: 9,
    url:
      'https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_960_720.jpg',
    title: 'Pull up',
    time: '00:30',
    times: '10 x',
  },
];

const Workouts = () => {
  return (
    <View style={styles.workouts}>
      <View style={styles.workoutHeader}>
        <Text style={styles.recentWorkout}>Recent Workouts</Text>
        <View style={styles.workoutsRight}>
          <Text style={{
            color: "#FC427B",
            fontWeight: "bold",
            fontSize: 15,
            marginRight: 10,
          }}>
            See all
          </Text>
        </View>
      </View>
      <React.Fragment>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={itemData => {
            return (
              <WorkOutItem
                title={itemData.item.title}
                time={itemData.item.time}
                times={itemData.item.times}
                uri={itemData.item.url}
              />
            )
          }}
        />
      </React.Fragment>

    </View>
  );
};

const styles = StyleSheet.create({
  workouts: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentWorkout: {
    fontWeight: "bold",
    fontSize: 20,
  },
  workoutsRight: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Workouts;
