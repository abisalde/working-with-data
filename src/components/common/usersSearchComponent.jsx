import React, { useRef } from 'react';
import  { Formik } from 'formik';
import { FilterBox, ListForm, SearchIcon, Input, Select, ShowCountry, CountryText } from './common.component.styled';

import { useDispatch, useSelector } from 'react-redux';
import { singleUsersData, filterCountry } from '../data/sampleData';
import { showCountry, filterUsersWithCountry } from '../store/actions/action_filter';

// Get FontAwesome
import { faSearch, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function UsersSearchComponents() {
    const { users } = useSelector(state => state.users)
    const displayUsers = singleUsersData(users);
    let countries = ['country'];
    countries = countries.concat(filterCountry(displayUsers));

    const showcountry = useRef(false);
    const dispatch = useDispatch()

    const initialValue = {
        country: '',
        showCountry: true,
        findInList: "",
    };

    const Toggle = ({switchToggle, onClick}) => {
        return (
            <FontAwesomeIcon
                onClick= {onClick}
                icon={switchToggle? faToggleOn: faToggleOff}
                color={switchToggle? "var(--btnroute)" : null}
                size="2x"
            />
        )
    }

    const onSubmit = async (values) => {
        let search = JSON.stringify(values, null, 2);
        search = JSON.parse(search);
        console.log('Searching User,  ', search.find)
    };

    const formik = Formik({
        initialValue,
        onSubmit,
    });



    return (
        <FilterBox>
            <ListForm onSubmit={ formik.handleSubmit }>
                <SearchIcon>
                <FontAwesomeIcon icon={faSearch}
                />
            </SearchIcon>
                <Input
                    placeholder=' Find in list'
                    type=' text'
                    required
                    name='findInList'
                    autoComplete='on'
                    onChange={formik.handleChange}
                    // value={formik.values.findInList} 
                />
            </ListForm>
                <Select
                    placeholder='country'
                    name='country'
                    onChange={formik.handleChange}
                    // value={formik.values.findInList}
                    onBlur={() =>
                        dispatch(filterUsersWithCountry(formik.values.country))
                    }
                >
                    {
                        countries.map((value, i) =>(
                            <option key={i} value={value}>{value}</option>
                        ))
                    }
                </Select>
            <ShowCountry>
                <Toggle
                    onChange={formik.handleChange}
                    // value={formik.values.showCountry}
                    onClick={() => {
                        showcountry.current = !showcountry.current
                        dispatch(showCountry(showcountry.current))
                        console.log('I am Clicked');
                    }}
                />
                <CountryText> Show Country</CountryText>
            </ShowCountry>
        </FilterBox>
    );
}

export default UsersSearchComponents;