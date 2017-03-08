import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import makeStore from './store';
import startServer from './server';

export const store = makeStore();
startServer(store);

render(<AppContainer ><App store={store} /></AppContainer>, document.querySelector('#app'));

if (module && module.hot) {
	module.hot.accept('./containers/app', () => {
		const HotApp = App.default;
		render(
			<AppContainer>
				<HotApp store={store} />
			</AppContainer>,
			document.querySelector('#app'));
	});
}
