import axios from 'axios'

const BOOK_API = "http://localhost:8000"

// function to register a new User
export const signup = (username, email, password) => {
    return axios.post(BOOK_API + '/api/v1/appusers/register', {
        username,
        email,
        password
    })
}

export const login = (username, password) => {
    return axios.post(BOOK_API + '/api/v1/appusers/login', {
        username,
        password
    })
}

export const logout = () => {
    return axios.get(BOOK_API + '/api/v1/appusers/logout',{withCredentials: true})
}

// CURRENT USER
export const getCurrentUser = () => {
    return axios.get(BOOK_API + '/api/v1/appusers/current', {withCredentials: true})
}

// export default {
//     signup,
//     login,
//     logout
// }