import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  ScrollView,
  Animated,
  View,
  Easing
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedView: {
    position: 'absolute',
    right: 30,
  },
});

class FloatingScrollView extends Component {
  constructor(props) {
    super(props);
    this.isAnimating = false;
    this.scrollPoint = 0;
    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    this._animatedValue = new Animated.Value(this.props.bottom);
  }

  onScroll(event) {
    console.log(event.nativeEvent)
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY < 0 || this.isAnimating) return;
    const offset = this.scrollPoint - offsetY;
    if (offset < -this.props.offset) this.toggleFab(offsetY, -this.props.height);
    if (offset > this.props.offset) this.toggleFab(offsetY, this.props.bottom);
  }

  toggleFab(newPoint, position) {
    this.isAnimating = true;
    Animated.timing(
      this._animatedValue,
      {
        toValue: position,
        duration: 200,
        easing: Easing.in,
      }
    ).start(() => {
      this.isAnimating = false;
      this.scrollPoint = newPoint;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref='_scrollView'
          scrollEventThrottle={16}
          onScroll={this.onScroll}
          style={styles.scrollView}>
          {this.props.children}
        </ScrollView>
        <Animated.View
          style={[styles.animatedView, this.props.childrenStyles,{bottom: this._animatedValue}]}>
          {this.props.floatingView}
        </Animated.View>
      </View>
    )
  }

}

FloatingScrollView.propTypes = {
  floatingView: PropTypes.node.isRequired,
  offset: PropTypes.number,
  height: PropTypes.number,
  bottom: PropTypes.number,
}

FloatingScrollView.defaultProps = {
  offset: 50,
};

export default FloatingScrollView;