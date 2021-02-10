import React, { useState, useEffect } from 'react'
import { getAllBooks } from '../services/book.service'
import { Card, Button} from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import { deleteBook } from "../services/book.service"


const BookContainer = () => {

    const deleteSavedBook = (e) => {
        let res = deleteBook(e.target.parentNode.id)
        // history.push('/')
        // window.location.reload()
        console.log(res)
      }


    const [books, setBooks] = useState(null)
    useEffect(() => {
        getAllBooks().then(response => {
            setBooks(response.data.data)
            // console.log(response.data.data)
        },
        (error) => {
            console.log(error)
        }
        )
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
                            <Card.Content extra>
                              <Button onClick={deleteSavedBook}>DeleteBook</Button>
                              <Button>Edit Book</Button>
                            </Card.Content>
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