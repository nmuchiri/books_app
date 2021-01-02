import axios from 'axios'

const API_URL = "http://localhost:8080/"

// function to save a new Event
export const save = (eventId, name, date, location) => {
    return axios.post(API_URL + 'profile/myevents/addevent', {
        eventId,
        name,
        date,
        location
    })
}

// function to see user's events on their profile

export const seeEvent = (eventId, name, date, location) => {
    return axios.post(API_URL + 'profile/myevents', {
        eventId,
        name,
        date,
        location
    })
}
