import React, { useState, useEffect } from 'react'
import { getAllBooks } from '../services/book.service'
import { Card} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios'
const BOOK_API = "http://localhost:8000"



const BookContainer = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        // let res= getAllBooks()
        // console.log(res)
        // getAllBooks().then(response => {
        //     setBooks(response.data.data)
        //     // console.log(response.data.data)
        // },
        // (error) => {
        //     console.log(error)
        // }
        // )

        axios.get(BOOK_API + '/api/v1/books/', )
        .then((res)=>{
            console.log(res.data.data)
            setBooks(res.data.data)
        }).catch (err =>{
                console.log(err)
            })

    },[])


    

    return(
        <div >
            
            {books ? ( 
                <>
                <h2>My Lovely Books</h2>
                {books.length > 0 ? (
                    <div className="book-container">
                        {books.map(book => (
                            <Card key={book.id}>
                            <Card.Content>
                              <Card.Header>{book.title}</Card.Header>
                              <Card.Description>{book.author}</Card.Description>
                              <Card.Description>{book.genre}</Card.Description>
                            </Card.Content>
                                <Link
                                    to={{
                                        pathname: `/books/${book.id}`,
                                        state: { book }
                                    }}
                                    key={book.id}
                                    >
                                    Thoughts About This Book
                                </Link>
                          </Card>
                        ))}
                    </div>
                ) : (
                    <h2>No books to show</h2>
                )}
                </>
            ) : (
                <h4>Loading...</h4>
            )}
        </div>
    )
}
export default BookContainer