

import { combineReducers } from 'redux';


import UserReducer from './reducers/users_reducer';
import UserTypeReducer from './reducers/userType_reducers';
import ViewReducer from './reducers/viewType_reducer';
import FilterReducer from './reducers/filter_reducer';




const reducersRoot = combineReducers({
    userType: UserTypeReducer,
    viewType: ViewReducer,
    singleUserDetails: ViewReducer,
    users: UserReducer,
    loading: UserReducer,
    showCountry: FilterReducer,
    userCountry: FilterReducer,
    filter: FilterReducer,

})

export default reducersRoot;