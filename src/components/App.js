import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import Home from './Home/Home';
import Footer from './Footer/Footer';

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <SubHeader />

                <Switch>
                    <Route path='/test'>
                        <div className='test__content'>
                            <h1 className='test__thankYou'>
                                Thank you for testing Amazin!
                            </h1>
                            <a className='test__goBackButton' href='/'>
                                Go back to Amazin
                            </a>
                        </div>
                    </Route>
                    <Route path='/'>
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
