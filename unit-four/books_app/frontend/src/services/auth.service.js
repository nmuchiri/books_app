import axios from 'axios'

const BOOK_API = "http://localhost:8000"

// function to register a new User
const signup = (username, email, password) => {
    return axios.post(BOOK_API + '/api/v1/appusers', {
        username,
        email,
        password
    })
}

const login = (username, password) => {
    return axios.post(BOOK_API + '/api/v1/appusers', {
        username,
        password
    })
    // .then((response) => {
    //     // Check if the response of the user has accessToken
    //     if(response.data.accessToken) {
    //         setItem('user', response.data)
    //     }
    //     return response.data
    // })
}


export default {
    signup,
    login
}