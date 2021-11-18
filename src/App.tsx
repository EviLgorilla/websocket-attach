import React from 'react';
import './App.css';
import TestComponent from "./TestComponent";
import useNotification from "./hooks/useNotification";

function App() {
    useNotification();

    return (
        <div>
            <TestComponent />
        </div>
  );
}

export default App;
