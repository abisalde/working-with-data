import React from 'react'
import { useSelector } from 'react-redux';


import GlobalView from '../model/usersModel/globalUser';
import UserProfile from '../model/usersModel/singleUserProfile';

function DynamicComponent() {
    const { viewType } = useSelector(state => state.viewType);
    const dynamicView = {
        Global: <GlobalView />,
        UserProfile: <UserProfile />
    }
    return (
        <React.Fragment>
            {dynamicView[viewType]}
        </React.Fragment>
    );
}

export default DynamicComponent;