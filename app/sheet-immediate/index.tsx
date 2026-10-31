import { router } from 'expo-router';
import { Button, View } from 'react-native';
import List from '../../components/List';

// The nested stack's first screen: the list, mounted right away.
export default function SheetImmediateIndex() {
	return (
		<View style={{ flex: 1 }}>
			<Button title="Push a screen" onPress={() => router.push('/sheet-immediate/pushed')} testID="push-screen" />
			<List delayed={false} />
		</View>
	);
}
