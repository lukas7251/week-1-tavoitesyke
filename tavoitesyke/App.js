import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

	const [age, setAge] = useState()
	const [rate, setRate] = useState()

	useEffect(() => {

		if (age){
			const higherHr = (220-age)*0.65
			const lowerHr = (220-age)*0.85
			setRate(`${Math.round(higherHr)}-${Math.round(lowerHr)}`)
		}else {
			setRate()
		}
		
	}, [age]);
  return (
    <View style={styles.container}>
      <Text>Heart rate calculator</Text>
      <TextInput
        style={styles.input}
				placeholder='age'
				onChangeText={(age) => setAge(age)}
				keyboardType='numeric'
      />
			<Text>Hr limits</Text>
			<Text>{rate}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },	
	input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
		borderRadius: 4,
	}
});
