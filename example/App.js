import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FloatingScrollView from 'react-native-floating-view';

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);
const arr = range(0, 200);

class Main extends Component {
  scrollView;

  constructor(props) {
    super(props);
  }

  getFloatingButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.scrollView.innerScrollView.scrollTo({ y: 0 });
        }}
        style={styles.fab}
      />
    );
  };

  render() {
    return (
      <FloatingScrollView
        ref={scrollView => {
          this.scrollView = scrollView;
        }}
        childrenStyles={styles.containerStyles}
        bottom={30}
        height={54}
        offset={50}
        floatingView={this.getFloatingButton()}
      >
        {arr.map(el => {
          return (
            <View key={el}>
              <Text>Test</Text>
            </View>
          );
        })}
      </FloatingScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    height: 54,
    width: 54,
    borderRadius: 54 / 2,
    backgroundColor: 'rgb(68, 124, 191)',
  },
  containerStyles: {
    right: 30,
  },
});

export default Main;
