import axios from 'axios'
const BOOK_API = "http://localhost:8000"


export const getAllBooks = () => {
    return axios.get(BOOK_API + '/api/v1/books')
}

// delete book from the database
export const deleteBook = (id) => {
    return axios({
        method: 'DELETE',
        url: BOOK_API + '/api/v1/books/' + id
    },
    {_id: id}
    )
    // ).then((res)=>{
    //     return res
    // })
}
// save book to the database

export const save = (title, author, genre) => {
    return axios.post(BOOK_API + '/api/v1/books/', {
        title,
        author,
        genre
    })
    
}

// edit book 

export const updateBook = (title, author, genre, id) => {
   return axios.put(BOOK_API + '/api/v1/books/' + id, {
        title:title,
        author:author,
        genre:genre,
        id: id
    })
    // .then (res => {
    //     console.log(res)
    // })
    // .catch (err =>{
    //     console.log(err)
    // })
}