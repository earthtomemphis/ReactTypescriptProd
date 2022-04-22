import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CellList from './components/CellList';
import { store } from './state/store';

const App = () => {
	return (
		<div>
			<CellList />
		</div>
	);
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
