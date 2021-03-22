import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './asset/css/main.css';
import Dashboard from './components/dashboard';
import store from './components/store/store';


class Page extends Component {
    render() { 
        return ( 
            <Provider store={store}>
            <main className="container">
                <Dashboard />
            </main>
            </Provider>
        );
    }
}

export default Page;