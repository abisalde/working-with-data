import React from 'react';
import  { Formik } from 'formik';

import { Form, Input, SearchIcon } from './common.component.styled';

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function SearchForm() {
    const initialValue = {
        findAUser: " ",
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
        <Form onSubmit={ formik.handleSubmit }>
            <SearchIcon user>
                <FontAwesomeIcon icon={faSearch}
                />
            </SearchIcon>
            <Input user
                placeholder=' Find a user'
                type='text'
                required
                autoComplete ='on'
                name='findAUser'
                onChange={formik.handleChange}
                // value={formik.values.findAUser} 
            />
        </Form>
    )
}

export default SearchForm;