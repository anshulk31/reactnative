import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { TouchableOpacity, View,Text, TextInput, Picker , StyleSheet } from 'react-native';

class SettingsScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			switch1Value: false,
      text: '',
      language: ''			
		}
	}

  _onPressButton() {
    alert('You tapped the button!')
  }

  // percentage = () => {
  	
  // }

	render(){
		const { names } = this.state
		return(
			<View>
				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity onPress={this._onPressButton} style={{height:50, width:50, backgroundColor:'powderblue'}}/>
					<TouchableOpacity onPress={this._onPressButton} style={{height:100, width:100, backgroundColor:'skyblue'}}/>
					<TouchableOpacity onPress={this._onPressButton} style={{height:150, width:150, backgroundColor:'steelblue'}}/>
					<TouchableOpacity onPress={this._onPressButton} hitSlop={{top: 10, bottom: 10, left: 0, right: 0}} style={{height:200, width:200, backgroundColor:'aquamarine'}}/>
				</View>

				<TextInput style={{borderColor:'#d3d3d3',borderWidth:1, height:40 }} onChange={this.handleChange} placeholder="firstname"/>
				<View style={styles.separator}/>
				<TextInput style={{borderColor:'#d3d3d3',borderWidth:1, height:40 }} onChange={this.handleChange} placeholder="Lastname"/>
				<View style={{flexDirection: 'row', paddingTop:110, alignItems:'flex-end'}}>
					<TouchableOpacity style={{height:50, width:50, backgroundColor:'powderblue'}}/>
					<TouchableOpacity style={{height:100, width:100, backgroundColor:'skyblue'}}/>
					<TouchableOpacity style={{height:150, width:150, backgroundColor:'steelblue'}}/>
					<TouchableOpacity style={{height:200, width:200, backgroundColor:'aquamarine'}}/>
				</View>
			</View>	
		)
	}
}

export default SettingsScreen;

var styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});