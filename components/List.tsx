import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const ROWS = Array.from({ length: 50 }, (_, i) => `Row ${i + 1}`);

// `delayed`: like data loading, the ScrollView mounts 1 s after the sheet is presented.
export default function List({ delayed }: { delayed: boolean }) {
	const [ready, setReady] = useState(!delayed);
	useEffect(() => {
		if (!delayed) {
			return;
		}
		const timeout = setTimeout(() => setReady(true), 1000);
		return () => clearTimeout(timeout);
	}, [delayed]);

	if (!ready) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator />
			</View>
		);
	}

	return (
		<ScrollView nestedScrollEnabled={true} testID="list">
			{ROWS.map((row) => (
				<Text key={row} style={{ padding: 20, fontSize: 18, borderBottomWidth: 1, borderColor: '#ddd' }}>
					{row}
				</Text>
			))}
		</ScrollView>
	);
}
