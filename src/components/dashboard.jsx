import React, { Component } from 'react';
import ADMIN from './admin';
import UsersDasboard from './users';



class Dashboard extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <ADMIN />
                <UsersDasboard />
            </React.Fragment>
        );
    }
}

export default Dashboard;