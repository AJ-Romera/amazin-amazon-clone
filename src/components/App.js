import React from 'react';
import './App.css';

/* Components */
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import Home from './Home/Home';
import Footer from './Footer/Footer';

function App() {
    return (
        <div className='app'>
            <Header />
            <SubHeader />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
