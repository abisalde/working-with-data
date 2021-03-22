import { dynamicView } from '../actions/viewType_action';

const initialState = {
    viewType: 'Global'
}

const ViewReducer = (state = initialState , action) => {
    switch(action.type){
        case dynamicView.globalView : return{
            ...state, 
            viewType: dynamicView.globalView
        }
        case dynamicView.userProfile : return{
            ...state,
            viewType: dynamicView.userProfile,
            singleUserDetails: action.payload
        }
        default: return state
    }
}

export default ViewReducer ;