import React from 'react'
import ReactDOM from 'react-dom/client'
import DispatcherExample from './apps/dispatcherExample.app';
import Redux from './apps/redux.app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { todoProvider as TDP } from './context/todoContext';

const renderApp = {
  dispatcherExample:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><TDP><DispatcherExample/></TDP></React.StrictMode>),
  redux:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><Redux/></React.StrictMode>)
};

renderApp.redux()
