import { Stack } from 'expo-router';

// The nested stack inside the form sheet.
export default function SheetLayout() {
	return <Stack screenOptions={{ title: 'Sheet' }} />;
}
