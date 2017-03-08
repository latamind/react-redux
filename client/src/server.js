import socket from 'socket.io-client';
import { ACTION_TYPE } from './constants';

// export const io = socket.connect(window.location.href);
export const io = socket.connect('http://localhost:5000');

export default function startServer(store) {
	store.subscribe(() => io.emit('state', store.getState()));
	io.on('connect', () => {
		const state = store.getState();
		if (state.type === ACTION_TYPE.INCREMENT) {
			io.emit('state', store.getState());
		}
		io.on('action', d => store.dispatch({ type: ACTION_TYPE.ALL, data: d }));
	});
}
