import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <>
      <View style={styles.containerTop}>
        <View style={styles.itemTop}></View>
        <View style={styles.itemTop}></View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.boxItemBottom}>
          <View style={styles.itemBottom}></View>
          <View style={styles.itemBottom}></View>
        </View>
        <View style={styles.boxItemBottom}>
          <View style={styles.itemBottom}></View>
          <View style={styles.itemBottom}></View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: '#A1c99A',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  containerBottom: {
    flex: 1,
    backgroundColor: '#c8c8fA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
  },
  itemTop: {
    flex: 1,
    backgroundColor: '#ffffc2',
    margin: 30,
    borderRadius: 20,
  },
  boxItemBottom: {
    flex: 1,
    flexDirection: 'row',
  },
  itemBottom: {
    flex: 1,
    backgroundColor: '#4f82c0',
    margin: 20,
    borderRadius: 15
  }
})

export default App;