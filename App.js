import * as React from 'react';
import { View, StyleSheet, } from 'react-native';


import Headers from './src/components/Headers';
import Challenges from './src/components/Challenges';
import Workouts from './src/components/Workouts';

const data = [
  {
    id: 1,
    name: 'Full Body Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url:
      'https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_960_720.jpg',
  },
  {
    id: 2,
    name: 'Begineer Abs Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url:
      'https://images-prod.healthline.com/hlcmsresource/images/AN_images/best-ways-to-get-abs-1296x728-feature.jpg',
  },
];

const App = () => {
  return (
    <View style={styles.screen}>
      <Headers />
      <Challenges data={data} />
      <Workouts />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;

