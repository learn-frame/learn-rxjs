import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layouts from './layouts/Layouts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layouts />, document.getElementById('root'));

serviceWorker.unregister();
