import { router } from 'expo-router';
import { Button, View } from 'react-native';
import List from '../../components/List';

// The nested stack's first screen: the list, mounted 1 s later.
export default function SheetIndex() {
	return (
		<View style={{ flex: 1 }}>
			<Button title="Push a screen" onPress={() => router.push('/sheet/pushed')} testID="push-screen" />
			<List delayed={true} />
		</View>
	);
}
