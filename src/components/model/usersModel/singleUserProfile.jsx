import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getGlobalUser } from '../../store/actions/viewType_action';

import { Results, ResultsText, SingleUser, UserSection, UserImage, UserDetails, UserName, Age, UserEmail, Date, Number, UserAddress, EmailText, DateText, Mobile } from './singleUserProfile.component.styled';

// Get Icons
import { ReactComponent as FaPhone } from '../../../asset/img/phone-call.svg';
import { ReactComponent as FaEmail } from '../../../asset/img/mail.svg';
import { ReactComponent as FaSmartPhone} from '../../../asset/img/iphone.svg';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function SingleUserProfile() {
    const dispatch = useDispatch();
    const { singleUserDetails } = useSelector(state => state.singleUserDetails);

    let { userPicture, userTitle, firstName, lastName, userAge, streetNumber, streetName, city, state, email, dateJoined, phone, cell } = singleUserDetails;

    return (
        <SingleUser>
            <Results onClick={ () => dispatch(getGlobalUser()) }>
                <FontAwesomeIcon 
                    icon={faArrowLeft}
                    color='var(--btnroute)'
                />
                <ResultsText>results</ResultsText>
            </Results>
            <UserSection>
                <UserImage url= {userPicture} />
                <UserDetails>
                    <UserName>
                        { userTitle }
                        { '.' }
                        { ' ' }
                        { firstName }
                        { ' ' }
                        { lastName }
                        { ' '}
                        <Age>{ userAge }</Age>
                    </UserName>
                    <UserAddress>
                        { streetNumber }
                        { ' ' }
                        { streetName },
                        { ' ' }
                        { city },
                        { ' ' }
                        { state }
                    </UserAddress>
                    <UserEmail>
                        <EmailText />
                        <FaEmail />
                        <EmailText>{ email }</EmailText>
                    </UserEmail>
                    <Date>
                        <DateText>
                            Joined: { dateJoined }
                        </DateText>
                    </Date>
                    <Mobile>
                        <FaPhone />
                        <Number>
                            { phone }
                        </Number>
                    </Mobile>
                    <Mobile>
                        <FaSmartPhone />
                        <Number>
                            { cell }
                        </Number>
                    </Mobile>
                </UserDetails>
            </UserSection>
        </SingleUser>
    );
}


export default SingleUserProfile;