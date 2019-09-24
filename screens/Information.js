import React, {Component} from 'react';
import {View, Text} from 'react-native';


class Information extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render() {
		const { item } = this.props;

		return(
			<View>
				<Text>{item.name}</Text>
				<Text>{item.Contact}</Text>
			</View>
		)
	}
}

export default Information;