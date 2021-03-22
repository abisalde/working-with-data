

export const dynamicView = {
    globalView: 'Global',
    userProfile: 'UserProfile',
}

export const getGlobalUser = () => {
    return {
        type: dynamicView.globalView
    }
}

export const getUserProfile = (user) => {
    return {
        type: dynamicView.userProfile,
        payload: user
    }
}