# react-native-floating-view
An easy way to add a view that autohides while scrolling

![mediac](https://media.giphy.com/media/26hiszmXkypwjVFrG/giphy.gif)

## Installation
`npm i react-native-floating-view --save`

## Usage
```js
// Require the module
import FloatingScrollView from 'react-native-floating-view';

  render() {
    return (
      <FloatingScrollView
        ref='_floatingScrollView'
        childrenStyles={styles.containerStyles}
        bottom={30}
        height={54}
        offset={50}
        floatingView={this.getFloatingButton()}
      >
        <View />
      </FloatingScrollView>
    );
  }

```
## Props
| Prop         | Type     | Optional | Default                | Description                                                          |
|--------------|----------|----------|------------------------|----------------------------------------------------------------------|
| childrenStyles      | style     | Yes      |                        | Override the styles of the animated view container                         |
| bottom    | number   | Yes      |  | Space from the bottom of the view                            |
| height    | number     | Yes      |                   | Height of the floating view                                       |
| floatingView    | node     | No      |                   | The view you want to autohide                                       |

## Example
Refer to the example folder to find an implementation of this project
