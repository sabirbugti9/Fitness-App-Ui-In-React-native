import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';


const InfoData = props => (
  <View style={{ ...props.style, paddingHorizontal: 10 }}>
    <Text style={styles.infoData}>{props.data}</Text>
    <Text style={styles.infoTitle}>{props.title}</Text>
  </View>
);

const ListItem = props => (
  <View style={styles.item}>
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={{ uri: props.uri }}
    >
      <View style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={styles.title}>{props.name}</Text>
        <View style={styles.datas}>
          <InfoData data={props.days} title="Days" />
          <InfoData style={{
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: "#999",
          }}
          data={props.workouts} title="Workouts" />
          <InfoData data={props.level} title="Level" />
        </View>
      </View>

    </ImageBackground>

  </View >
);

const styles = StyleSheet.create({
  item: {
    width: 350,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginLeft: 15,
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  }, title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f4f4f4",
    textAlign: 'center',
    padding: 10,
    textTransform: 'uppercase',
  },
  datas: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoData: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: "#f4f4f4",
  }, infoTitle: {
    color: "#f4f4f4",
    textAlign: 'center'
  }
});

export default ListItem;
