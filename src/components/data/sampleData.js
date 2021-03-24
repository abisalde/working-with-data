const userData = [
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Gema",
            "last": "Garrido"
        },
        "location": {
            "street": {
                "number": 2512,
                "name": "Calle de Argumosa"
            },
            "city": "Gandía",
            "state": "Aragón",
            "country": "Spain",
            "postcode": 90208,
            "coordinates": {
                "latitude": "-21.5821",
                "longitude": "110.1122"
            },
            "timezone": {
                "offset": "+5:00",
                "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
        },
        "email": "gema.garrido@example.com",
        "dob": {
            "date": "1957-01-05T04:19:57.715Z",
            "age": 64
        },
        "registered": {
            "date": "2002-12-06T02:30:20.665Z",
            "age": 19
        },
        "phone": "959-077-560",
        "cell": "668-729-261",
        "id": {
            "name": "DNI",
            "value": "59132013-O"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/34.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
        },
        "nat": "ES"
    }
]

const singleUserData = (dataUser) => {
    let singleUser = dataUser.map((user) => {
        let {gender, name: {title, first, last}, location: {street: {number, name}, city, state, country}, email, phone, cell, dob: {age}, registered: {date}, picture: {large}} = user;
        let userTitle = title;
        let firstName = first;
        let lastName = last;
        let streetNumber = number;
        let streetName = name;
        let userAge = age;
        let dateJoined = date;
        let userPicture = large;
        return {gender, userTitle, firstName, lastName, streetNumber, streetName, city, state, country, email, phone, cell, userAge, dateJoined, userPicture}
    })
    return singleUser;
}

export const singleUsersData = (allData) => {
    const {results} = allData;
    let userNewDetails;

    if(results) {
        userNewDetails = JSON.stringify(results, null, 2);
        userNewDetails = JSON.parse(userNewDetails);
        // console.log(userNewDetails);
    }
    return (userNewDetails) ? singleUserData(userNewDetails) : singleUserData(userData);
}

export const filterCountry = (country) => {
    let countries = country.map((user) => {
        let { userCountry } = user;
        return userCountry;
    })
    return countries;
}