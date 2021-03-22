import React from 'react';
import { UserDashboard } from '../asset/css/users.component.styled';
import DynamicComponent from './common/filterSearchComponent';


function UsersDasboard() {
    return (
        <UserDashboard>
            <DynamicComponent />
        </UserDashboard>
    )
}

export default UsersDasboard;