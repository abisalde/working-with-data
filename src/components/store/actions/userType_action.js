/**
 * Passing Actions to the application using dispatched in react-redux library
 */

export const users = {
    male:   'Male Users',
    female: 'Female Users',
    all:    'All Users'
}

export const getMaleUsers = () => {
    return {
        type: users.male
    }
}

export const getFemaleUsers = () => {
    return {
        type: users.female
    }
}

export const getAllUsers = () => {
    return {
        type: users.all
    }
}