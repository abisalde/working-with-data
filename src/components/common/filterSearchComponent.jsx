import React from 'react';
import { useSelector } from 'react-redux';



//Styled Components
import { DynamicBox, DynamicText, FilterText } from './common.component.styled';
import UsersSearchComponents from './usersSearchComponent';




function FilterSearchComponents() {
    const { userType } = useSelector(state => state.userType)
    return (
        <DynamicBox>
            <DynamicText>{ userType }</DynamicText>
            <FilterText>Filter by</FilterText>
            <UsersSearchComponents />
        </DynamicBox>
    );
}

export default FilterSearchComponents;