import { createStore } from 'redux';
import reducers from './reducers';

export default function makeStore() {
	return createStore(reducers);
}
