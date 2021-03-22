import React from 'react';

// Redux Action
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../store/actions/viewType_action';

//Importing styled Components
import { GlobalDiv, SingleUsers, UserAddress, UserDetails, UserImage, UserName, Contact, List, Icon, RouteBtn } from './globalUser.component.styled';

//Getting user Data
import { singleUsersData } from '../../data/sampleData';

// Get Icons
import { ReactComponent as FaPhone } from '../../../asset/img/phone-call.svg';
import { ReactComponent as FaEmail } from '../../../asset/img/mail.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';





function GlobalUsersDetails() {
    const { users } = useSelector(state => state.users);

    const { showCountry } = useSelector(state => state.showCountry);
    
    let displayUsers = singleUsersData(users);

    const dispatch = useDispatch();

    return (
        <GlobalDiv>
            { displayUsers.map((user, i) => (
                <SingleUsers key={i}>
                    <UserImage url={user.userPicture} />
                    <UserDetails>
                        <UserName>{ user.firstName } { ' ' } { user.lastName }</UserName>
                        <UserAddress>
                            { user.streetNumber }
                            { ' ' }
                            { user.streetName },
                            { ' ' }
                            { user.city },
                            { ' ' }
                            { user.state }
                            { (showCountry) ? <UserAddress>,{ ' ' }{user.country}</UserAddress> : null}
                        </UserAddress>
                        <Contact>
                            <List>
                                <Icon><FaEmail /></Icon>
                                {user.email}
                            </List>
                            <List>
                                <Icon><FaPhone /></Icon>
                                {user.phone}
                            </List>
                            <RouteBtn onClick={() => dispatch(getUserProfile(user))}>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                />
                            </RouteBtn>
                        </Contact>
                    </UserDetails>
                </SingleUsers>
                )
            )}
        </GlobalDiv>
    );
}

export default GlobalUsersDetails;