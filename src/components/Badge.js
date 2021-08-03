import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Badge = props => (
  <View style={styles.badge}>
    <Text style={styles.text}>{props.name}</Text>
  </View>
)

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    marginHorizontal: 3,
    alignItems: 'center',
    backgroundColor: "#e8eaed",
    borderRadius: 10,
  },
  text: {
    marginRight: 5,
  }
})

export default Badge