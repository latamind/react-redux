import { ACTION_TYPE, INITIAL_STATE } from '../constants';

export default (state = { data: INITIAL_STATE }, action) => {
	let s = Object.assign({}, state);
	switch (action.type) {
		case ACTION_TYPE.INCREMENT:
			s.data = [...s.data];
			s.data[action.id].value += 1;
			break;
		default:
			if (action.data) {
				s = action.data;
			} else {
				s = state;
			}
	}
	return { type: action.type, data: s.data };
};
