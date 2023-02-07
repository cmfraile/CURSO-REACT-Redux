import React from 'react'
import ReactDOM from 'react-dom/client'
import DispatcherExample from './apps/dispatcherExample.app';
import { todoProvider as TDP } from './context/todoContext';
import { reduxProvider as RP } from './context/reduxContext';
import Redux from './apps/redux.app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';



const renderApp = {
  dispatcherExample:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><TDP><DispatcherExample/></TDP></React.StrictMode>),
  redux:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><RP><Redux/></RP></React.StrictMode>
  )
};

renderApp.redux()
