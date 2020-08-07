import React from 'react';
import ReactDOM from 'react-dom';

// mock http requests
import './api';

const App = () => {
  return (
    <h1>Hey there</h1>
  );
};

const MOUNT_NODE = document.getElementById('react-root');
ReactDOM.render(<App />, MOUNT_NODE);
