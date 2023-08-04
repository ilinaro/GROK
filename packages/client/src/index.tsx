import './styles/index.scss';

import App from './App';
import ReactDOM from 'react-dom/client';
import React from 'react';

ReactDOM.hydrateRoot(
	document.getElementById('root') as HTMLElement,
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
