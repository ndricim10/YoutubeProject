import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './base.scss'

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);