import React from 'react';
import ReactDOM from 'react-dom';

// mock http requests
import './api';

import { App } from './src/app/App';

const MOUNT_NODE = document.getElementById('react-root');
ReactDOM.render(<App />, MOUNT_NODE);
