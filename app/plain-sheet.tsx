import List from '../components/List';

// The list as the form sheet's own screen, without a nested stack, mounted 1 s later.
export default function PlainSheet() {
	return <List delayed={true} />;
}
