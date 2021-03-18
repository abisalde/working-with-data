import { view } from '../actions/viewType_action';

const initialState = {
    viewType: 'Global'
}

 const ViewReducer = (state = initialState , action) => {
    switch(action.type){
        case view.normal : return{
            ...state, 
            viewType: view.globalView
        }
        case view.expanded : return{
            ...state,
            viewType: view.userProfile,
            viewMoredetails: action.payload
        }
        default: return state
    }
}

export default ViewReducer ;