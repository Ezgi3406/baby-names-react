import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import babyNamesdata from './babyNamesData.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={babyNamesdata}/>, document.getElementById('root'));
registerServiceWorker();
