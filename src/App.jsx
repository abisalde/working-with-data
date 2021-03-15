import React, { Component } from 'react';
import './asset/css/main.css';
import Dashboard from './components/dashboard';


class Page extends Component {
    render() { 
        return ( 
            <main className="container">
                <Dashboard />
            </main>
        );
    }
}

export default Page;