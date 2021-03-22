import React from 'react';
import { useDispatch } from 'react-redux';

// Use FontAwesome for Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

//Styled Components
import { ShowUsers, Text, ButtonRow, Selector, AllUsers, MaleUsers, FemaleUsers } from './selectUser.component.styled';

//Fetch Users from UsersAction
import { fetchAllUsers, fetchMaleUsers, fetchFemaleUsers } from '../../../store/actions/users_action';


function SelectUser() {
    const dispatch = useDispatch()
    return (
        <ShowUsers>
            <Text>Show Users</Text>
            <ButtonRow>
                <Selector>
                    <AllUsers onClick={()=> dispatch(fetchAllUsers())}>
                        <FontAwesomeIcon 
                            size="2x"
                            icon={faUsers} />
                    </AllUsers>
                    <Text size>All Users</Text>
                </Selector>
                <Selector>
                    <MaleUsers onClick={()=> dispatch(fetchMaleUsers())}>
                        <FontAwesomeIcon 
                            size="2x"
                            icon={faMale}
                        />
                    </MaleUsers>
                    <Text size>Male Users</Text>
                </Selector>
                <Selector>
                    <FemaleUsers onClick={()=> dispatch(fetchFemaleUsers())}>
                        <FontAwesomeIcon 
                            size="2x"
                            icon={faFemale}
                        />
                    </FemaleUsers>
                    <Text size>Female Users</Text>
                </Selector>
            </ButtonRow>
        </ShowUsers>
    )
}

export default SelectUser;