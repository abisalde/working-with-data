export const SHOW_COUNTRY = "SHOW_COUNTRY";
export const COUNTRY = "COUNTRY";
export const FILTER = "FILTER";

export const showCountry = (show) => {
    return {
        type: SHOW_COUNTRY,
        payload: show
    }
}

export const filterUsersWithCountry = (country) => {
    return {
        type: COUNTRY,
        payload: country
    }
}

export const getFilter = (filter) => {
    return {
        type: FILTER,
        payload: filter
    }
}
