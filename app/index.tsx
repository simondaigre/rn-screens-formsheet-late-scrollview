import { type Href, router } from 'expo-router';
import { Button, View } from 'react-native';

const SHEETS: { title: string; href: Href; testID: string }[] = [
	{ title: 'Nested stack, list mounted 1 s later', href: '/sheet', testID: 'open-sheet' },
	{ title: 'Nested stack, list mounted right away', href: '/sheet-immediate', testID: 'open-sheet-immediate' },
	{ title: 'No nested stack, list mounted 1 s later', href: '/plain-sheet', testID: 'open-plain-sheet' },
	{ title: 'No nested stack, list mounted right away', href: '/plain-sheet-immediate', testID: 'open-plain-sheet-immediate' },
];

export default function Home() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
			{SHEETS.map(({ title, href, testID }) => (
				<Button key={testID} title={title} onPress={() => router.push(href)} testID={testID} />
			))}
		</View>
	);
}
