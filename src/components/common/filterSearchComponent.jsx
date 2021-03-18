import React from 'react';
import GlobalUsersDetails from '../model/usersModel/globalUser';
import { DynamicBox, DynamicText, FilterText } from './common.component.styled';
import UsersSearchComponents from './usersSearchComponent';




function DynamicComponent() {
    return (
        <DynamicBox>
            <DynamicText>All Users</DynamicText>
            <FilterText>Filter by</FilterText>
            <UsersSearchComponents />
            <GlobalUsersDetails />
        </DynamicBox>
    );
}

export default DynamicComponent;