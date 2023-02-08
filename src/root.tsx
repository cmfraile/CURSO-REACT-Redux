import React from 'react'
import ReactDOM from 'react-dom/client'
import DispatcherExample from './apps/dispatcherExample.app';
import { todoProvider as TDP } from './context/todoContext';
import { reduxProvider as RP } from './context/reduxContext';
import { pokemonProvider as PKMNP } from './context/pokemonContext';
import { store } from './store/store';

import Redux from './apps/redux.app';
import PokemonApp from './apps/pokemon.app';
import TodoReduxApp from './apps/todoRedux.app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { Provider } from 'react-redux';




const renderApp = {
  dispatcherExample:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><TDP><DispatcherExample/></TDP></React.StrictMode>),
  redux:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><RP><Redux/></RP></React.StrictMode>
  ),
  pokemon:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><PKMNP><PokemonApp/></PKMNP></React.StrictMode>
  ),
  todo2:() => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><Provider store={store}><TodoReduxApp/></Provider></React.StrictMode>
  ),
};

renderApp.todo2()
