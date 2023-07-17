import './styles/index.scss';

import App from './App';
import ReactDOM from 'react-dom/client';
import { startServiceWorker } from '@utils/sw/startServiceWorker';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

startServiceWorker();
