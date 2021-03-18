import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalDiv, SingleUsers, UserAddress, UserDetails, UserImage, UserName, Contact, List } from './globalUser.component.styled';


import { SingleUsersData } from '../../data/sampleData';

// Get FontAwesome
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






function GlobalUsersDetails() {
    const { users } = useSelector(state => state.users);

    const { showCountry } = useSelector(state => state.showCountry);
    
    let displayUsers = SingleUsersData(users);

    const dispatch = useDispatch();

    return (
        <GlobalDiv>
            { displayUsers.map((user, i) => (
                <SingleUsers key={i}>
                    <UserImage url={user.userPicture} />
                    <UserDetails>
                        <UserName>{ user.firstName } {" "} { user.lastName }</UserName>
                        <UserAddress>
                            { user.streetNumber }
                            { " "}
                            { user.streetName },
                            { user.city },
                            { user.state }
                            { (showCountry) ? <UserAddress>,{ " " }{user.country}</UserAddress> : null}
                        </UserAddress>
                        <Contact>
                            <List>
                                <FontAwesomeIcon 
                                color="var(--main-color"
                                icon={faEnvelope} />
                                {user.email}
                            </List>
                            <List>
                                <FontAwesomeIcon 
                                color="var(--main-color)"
                                icon={faPhoneVolume}
                                />
                                {user.phone}
                            </List>
                        </Contact>
                    </UserDetails>
                </SingleUsers>
                )
            )}
        </GlobalDiv>
    );
}

export default GlobalUsersDetails;