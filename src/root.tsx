import React from 'react'
import ReactDOM from 'react-dom/client'
import DispatcherExample from './dispatcherExample/main';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { todoProvider as TDP } from './context/todoContext';

const renderApp = {
  dispatcherExample:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><TDP><DispatcherExample/></TDP></React.StrictMode>),
  app2:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><DispatcherExample/></React.StrictMode>)
};

renderApp.dispatcherExample()
