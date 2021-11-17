import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store';
import './App.css';
import TestComponent from "./TestComponent";

function App() {
  return (
    <div>
        <ReduxProvider store={store}>
            <TestComponent />
        </ReduxProvider>
    </div>
  );
}

export default App;
