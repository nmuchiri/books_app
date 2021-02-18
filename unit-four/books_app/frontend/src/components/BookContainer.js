import React, { useState, useEffect } from 'react'
import { getAllBooks } from '../services/book.service'
import { Card} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import  axios  from 'axios'


const BookContainer = () => {

    const [books, setBooks] = useState(null)
    useEffect(() => {
        let res= getAllBooks()
        console.log(res)
        // getAllBooks().then(response => {
        //     setBooks(response.data.data)
        //     // console.log(response.data.data)
        // },
        // (error) => {
        //     console.log(error)
        // }
        // )
    },[])

    return(
        <div>
            {books ? (
                <>
                <h2>My Books</h2>
                {books.length > 0 ? (
                    <div>
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
                                    More Information
                                </Link>
                          </Card>
                        ))}
                    </div>
                ) : (
                    <div>No books to show</div>
                )}
                </>
            ) : (
                <h4>Loading...</h4>
            )}
        </div>
    )
}
export default BookContainer