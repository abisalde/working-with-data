import React from 'react';
import { AdminName, DashboardGreeting, Greeting, WelcomeMessage, Wrapper } from '../asset/css/admin.component.styled';

import SearchForm from '../components/common/searchForm';
import SelectUser from '../components/model/adminModel/selectUser/selectUser';


function ADMIN({name}) {

    let adminName;
    (name) ? adminName = name : adminName = ' Emerald';
        return ( 
            <Wrapper>
                <DashboardGreeting>
                    <Greeting>
                        Hello, {' '}
                        <AdminName>
                            {adminName}
                        </AdminName>
                    </Greeting>
                    <WelcomeMessage>
                        Welcome to your dashboard, kindly sort through the user base
                    </WelcomeMessage>
                </DashboardGreeting>
                <SearchForm />
                <SelectUser />
            </Wrapper>
        );
}

export default ADMIN;