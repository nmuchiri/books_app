import React, { useState, useEffect } from 'react'
import { Card, Button} from 'semantic-ui-react'
import { useParams, useHistory, Link} from "react-router-dom";
import { deleteBook } from "../services/book.service"
import  axios  from 'axios'

const BOOK_API = "http://localhost:8000"

const OneBook = (props)=>{
console.log(props.location.state)
 let bookInfo = props.location.state.book
 let history = useHistory()
    let {id}= useParams()
    
    const deleteSavedBook = (e) => {
        console.log(bookInfo.id)
        deleteBook(bookInfo.id).then(()=>{
             props.history.push('/profile')
        
        })
      }

      const [savedBook, setSavedBook] = useState("")

      useEffect(() => {
            axios.get(`${BOOK_API}/api/v1/books/${id}`) 
              .then((res) => {
                  console.log(res)
                setSavedBook(res.data)
              })
          }, [])
     console.log(savedBook)
    //  console.log(id)
    
      
          

    return(
        <div>
        <Card key={bookInfo.id}>
          <Card.Content>
            <Card.Header>{bookInfo.title}</Card.Header>
            <Card.Description>{bookInfo.author}</Card.Description>
            <Card.Description>{bookInfo.genre}</Card.Description>
          </Card.Content>
          <Card.Content extra key={bookInfo.id}>
            <Button onClick={deleteSavedBook}>Delete Book</Button>
            <Link
                  to={{
                 pathname: `/books/edit/${bookInfo.id}`,
                state: { bookInfo }
            }}
                key={bookInfo.id}
                >
           <Button >Edit Book</Button>
            </Link>
          </Card.Content>
        </Card>
        </div>
    )
}

export default OneBook
