import React from 'react';
import { Linking, View, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class Info extends React.Component {
	render() {
	return (
		<View style={styles.infoBox}>
			<Text style={styles.infoText}>Reading about the effectivness of Pomodoro Technique 
				<Text style={{color: 'blue'}}
      				onPress={() => Linking.openURL('https://www.themuse.com/advice/take-it-from-someone-who-hates-productivity-hacksthe-pomodoro-technique-actually-works')}> here
      			</Text>.
			</Text>
		</View>
	)
	}
}
