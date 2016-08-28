import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import FloatingScrollView from 'react-native-floating-view';

const range = (start, end) => (
  Array.from({length: end - start + 1}, (x, i) => i + start)
);
const arr = range(0, 50);

class Main extends Component {
  constructor(props){
    super(props);
    this.getFloatingButton = this.getFloatingButton.bind(this);
  }

  getFloatingButton() {
    return (
      <TouchableOpacity
        onPress={() => { this.refs._scrollView.refs._scrollView.scrollTo({y:0}) }}
        style={styles.fab}>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <FloatingScrollView
        ref='_scrollView'
        childrenStyles={styles.containerStyles}
        bottom={30}
        height={54}
        offset={50}
        floatingView={this.getFloatingButton()}
      >
        {arr.map((el) => {
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
  }
});

export default Main;
