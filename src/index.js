
import ReactDOM from 'react-dom';
import App from './app/app';
import { BrowserRouter } from "react-router-dom";
import './css/gridStyle.css';
import './cards/gridHeaderCard.css';
import './css/flexStyle.css';
import './css/commonStyles.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));