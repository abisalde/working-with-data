

export const view = {
    globalView: 'Global',
    userProfile: 'UserProfile'
}

export const getGlobalUser = () => {
    return {
        type: view.globalView
    }
}

export const getUserProfile = (user) => {
    return {
        type: view.userProfile,
        payload: user
    }
}