import React from 'react';
import  { Formik } from 'formik';
import { FilterBox, ListForm, SearchIcon, Input, Select, ShowCountry, CountryText } from './common.component.styled';


// Get FontAwesome
import { faSearch, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function UsersSearchComponents() {
    const initialValue = {
        findInList: " ",
    };

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
            <ListForm>
                <Select>
                    <option>Country</option>
                </Select>
            </ListForm>
            <ShowCountry>
                <FontAwesomeIcon
                    color="var(--maleuser)"
                    icon={faToggleOn}
                />
                <CountryText> Show Country</CountryText>
            </ShowCountry>
        </FilterBox>
    );
}

export default UsersSearchComponents;