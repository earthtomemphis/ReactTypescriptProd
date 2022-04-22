import { useTypedSelector } from '../hooks/use-typed-selector';
import { Cell } from '../state';
import CellListItem from './CellListItem';

const CellList: React.FC = ({ order, data }) => {
	const cells = useTypedSelector(({ cells: { order, data } }) => {
		return order.map((id: any) => {
			return data[id];
		});
	});
	const renderedCells = cells.map((cell: any) => (
		<CellListItem key={cell.id} cell={cell} />
	));

	return <div>{renderedCells}</div>;
};

export default CellList;
