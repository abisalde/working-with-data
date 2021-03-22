import React from 'react';
import { useSelector } from 'react-redux';

//User Global Model
import GlobalUsersDetails from '../model/usersModel/globalUser';

//Styled Components
import { DynamicBox, DynamicText, FilterText } from './common.component.styled';
import UsersSearchComponents from './usersSearchComponent';




function DynamicComponent() {
    const { userType } = useSelector(state => state.userType)
    return (
        <DynamicBox>
            <DynamicText>{ userType }</DynamicText>
            <FilterText>Filter by</FilterText>
            <UsersSearchComponents />
            <GlobalUsersDetails />
        </DynamicBox>
    );
}

export default DynamicComponent;