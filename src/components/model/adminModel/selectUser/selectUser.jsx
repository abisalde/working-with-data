import React from 'react';

// Use FontAwesome for Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { ShowUsers, Text, ButtonRow, Selector, AllUsers, MaleUsers, FemaleUsers } from './selectUser.component.styled';


function SelectUser() {
    return (
        <ShowUsers>
            <Text>Show Users</Text>
            <ButtonRow>
                <Selector>
                    <AllUsers>
                        <FontAwesomeIcon 
                            size="2x"
                            icon={faUsers} />
                    </AllUsers>
                    <Text size>All Users</Text>
                </Selector>
                <Selector>
                    <MaleUsers>
                        <FontAwesomeIcon 
                            size="2x"
                            icon={faMale}
                        />
                    </MaleUsers>
                    <Text size>Male Users</Text>
                </Selector>
                <Selector>
                    <FemaleUsers>
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