import { users } from '../actions/userType_action';

const initialState = {
    userType: 'User List'
}

const UserTypeReducer = (state = initialState, action) => {
    switch(action.type) {
        case users.all : return {
            ...state,
            userType: users.all
        }
        case users.male : return {
            ...state,
            userType: users.male
        }
        case users.female : return {
            ...state,
            userType: users.female
        }
        default: return state
    }
}

export default UserTypeReducer;