import React from 'react';
import './App.css';

/* Components */
import Header from './Header';
import SubHeader from './SubHeader';
import Home from './Home';

function App() {
    return (
        <div className='app'>
            <Header />
            <SubHeader />
            <Home />
        </div>
    );
}

export default App;
