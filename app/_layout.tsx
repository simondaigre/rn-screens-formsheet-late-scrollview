import { Stack } from 'expo-router';

const sheetOptions = {
	headerShown: false,
	presentation: 'formSheet' as const,
	sheetAllowedDetents: [0.5, 0.97],
	sheetGrabberVisible: true,
};

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Home' }} />
			<Stack.Screen name="sheet" options={sheetOptions} />
			<Stack.Screen name="sheet-immediate" options={sheetOptions} />
			<Stack.Screen name="plain-sheet" options={sheetOptions} />
			<Stack.Screen name="plain-sheet-immediate" options={sheetOptions} />
		</Stack>
	);
}
