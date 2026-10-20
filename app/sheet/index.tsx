import List from '../../components/List';

// The nested stack's only screen: the list, mounted 1 s later.
export default function SheetIndex() {
	return <List delayed={true} />;
}
