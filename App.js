import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, View, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


/**** START: Basic 01: Rendering a text */
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, World!</Text>
//       </View>
//     );
//   }
// }
/**** End Basic 01: Rendering a text */

/**** START: Basic 02: Property basics */
// class Greeting extends Component {
//   render(){
//     return (
//       <View style={{alignItems:"center"}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     )
//   }
// }

// export default class LotsofGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems:"center", top:50}}>
//         <Greeting name="Anbu" />
//         <Greeting name="Suba" />
//         <Greeting name="Kathiravan" />
//         <Greeting name="Gowtham" />
//       </View>
//     )
//   }
// }
/**** END Basic 02: Property Basics */

/**** START: Basic 03: Styles */
// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   setColorRed : {
//     color: '#f44336'
//   },
// });

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//     <View>
//       <Text style={styles.setColorRed}>Just RED</Text>
//       <Text style={styles.bigBlue}>Just BIG BLUE</Text>
//       <Text style={[styles.bigBlue, styles.setColorRed]}>bigBlue, then red</Text>
//       <Text style={[styles.setColorRed, styles.bigBlue]}>red, then bigBlue</Text>
//     </View>
//     );
//   }
// }
/**** END Basic 02: Styles */

/**** START: Basic 03: Fixed dimensions */
// export default class FixedDimenionsBasics extends Component {
//   render(){
//     return (
//       <View>
//         <View style={{width:50,height:50,backgroundColor:'powderblue'}} />
//         <View style={{width:150, height:100, backgroundColor:'skyblue'}} />
//         <View style={{width:150, height:150, backgroundColor:'steelblue'}} />
//       </View>
//     );
//   }
// }
/**** END: Basic 03: Fixed dimensions */

// /**** START: Basic 04: Flex layout basics */
// export default class FlexDirectionBasics extends Component {
//   render(){
//     return (
//       <View style={{
//         flex:1,
//         justifyContent: 'center',
//         alignItems:'stretch',
//         flexDirection:'column'
//         }}>
//           <View style={{width:50,height:50,backgroundColor:'red'}} />
//           <View style={{height:50, backgroundColor:'yellow'}} />
//           <View style={{height:50, backgroundColor:'green'}} />
//       </View>      
//     );
//   }
// }
// /**** END: Basic 04: Fixed dimensions */

/**** START: Basic 05:  Handling textinput */
// export default class PizzaTranslator extends Component {
//   constructor(props){
//     super(props);
//     this.state={text:''};
//   }

//   render(){
//     return (
//       <View style={{padding:10}}>
//          <TextInput 
//           style={{height:50}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//          />
//          <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>      
//     );
//   }
// }
/**** END: Basic 05: Hanlding textinput */

/**** START: Basic 06:  Handling touches */
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('You tapped the button');
//   }

//   render(){
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button 
//             onPress={this._onPressButton}
//             title="Press me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button 
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button 
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>    
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent:'center',
//   },
//   buttonContainer:{
//     margin:20
//   },
//   alternativeLayoutButtonContainer: {
//     margin:20,
//     flexDirection:'row',
//     justifyContent:'space-between'
//   }
// });
/**** END: Basic 05: Handling textinput */

/**** START: Basic 06:  Handling touches */
export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button');
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Highlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback 
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <Text style={styles.buttonText}>
              TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}
            </Text>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});
/**** END: Basic 05: Handling touches */