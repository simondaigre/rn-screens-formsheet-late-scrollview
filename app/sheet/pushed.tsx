import { Text, View } from 'react-native';

// A screen pushed over the list on the nested stack, with a header and content that doesn't scroll.
export default function Pushed() {
	return (
		<View style={{ flex: 1, padding: 20, gap: 12 }} testID="pushed">
			<Text style={{ fontSize: 18 }}>Pushed screen</Text>
			<Text>Drag the sheet down from the header, or from this text.</Text>
		</View>
	);
}
