import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Badge from './Badge';

const Headers = _ => (
  <React.Fragment>
    <View style={styles.icons}>
    </View>
    <View>
      <Text style={styles.headerText}>Start Your</Text>
      <Text style={styles.headerText}>
        <Text style={styles.pinkText}>Fitness</Text> Journey
      </Text>
      <View style={styles.badges}>
        <Badge name="Easy Level" />
        <Badge name="Free" />
      </View>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  }, rightBtns: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  pinkText: {
    color: "#FC427B",
  },
  badges: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 15,
  }
});

export default Headers;
