// @flow

import { type Node } from 'react';

export type Props = {
  bottom: number,
  children: Node,
  childrenStyles: Object,
  floatingView: Node,
  height: number,
  offset: number,
  onScroll: Function,
};

export type ScrollEvent = {
  nativeEvent: {
    contentOffset: {
      x: number,
      y: number,
    },
    contentSize: {
      height: number,
      width: number,
    },
    layoutMeasurement: {
      height: number,
      width: number,
    },
  },
  timeStamp: number,
};
