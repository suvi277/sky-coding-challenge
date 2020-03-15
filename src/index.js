import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import store, { history } from './store';
import Routes from './routes';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ToastContainer />
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
