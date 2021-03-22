import React from 'react';
import { UserDashboard } from '../asset/css/users.component.styled';
import DynamicComponent from './common/dynamicViewComponent';
import FilterSearchComponents from './common/filterSearchComponent';
import PaginationDownloads from './common/paginationDownloads';


function UsersDasboard() {
    return (
        <UserDashboard>
            <FilterSearchComponents />
            <DynamicComponent />
            <PaginationDownloads />
        </UserDashboard>
    )
}

export default UsersDasboard;