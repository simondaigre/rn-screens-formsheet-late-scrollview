import List from '../components/List';

// The list as the form sheet's own screen, without a nested stack, mounted right away.
export default function PlainSheetImmediate() {
	return <List delayed={false} />;
}
