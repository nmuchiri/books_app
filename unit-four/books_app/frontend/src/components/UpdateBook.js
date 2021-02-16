import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import  axios  from 'axios'
import FormGroup from './common/FormGroup'
import { Button} from 'semantic-ui-react'
import { updateBook  } from '../services/book.service'

const BOOK_API = "http://localhost:8000"

const UpdateBook =(props)=>{

    let editedBook= props.location.state.bookInfo
    console.log(editedBook)
    // let history = useHistory()
       let {id}= useParams()

    const [updatedBook, setUpdatedBook] = useState("")
    const [savedBook, setSavedBook] = useState("")
    useEffect(() => {
        axios.get(`${BOOK_API}/api/v1/books/${id}`) 
          .then((res) => {
              console.log(res)
            setSavedBook(res.data)
          })
      }, [])

    // Pulls in data to the form to pre-populate it
    const handleSubmit = (e) => {
        e.preventDefault()
        updateBook(
                savedBook.title,
                savedBook.author,
                savedBook.genre,
                id
        ).then(()=>{
            props.history.push('/')
          }).catch(err =>{
            console.log(err)
          })
    }

    function handleUpdate(event) {
        console.log(event)
        setSavedBook({ [event.target.name]: event.target.value})
      }



        return (

           
             <div className="col-md-12">
            
                 <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="book-img"
                        className="book-img-card"
                    />
                    <Form onSubmit={handleSubmit}  key={id}>
                        <FormGroup text="title">
                            <Input
                                type='text'
                                className='form-control'
                                name='title'
                                value={savedBook.title}
                                onChange={handleUpdate}
                            />
                        </FormGroup>
                         <FormGroup text="author">
                            <Input
                                type='text'
                                className='form-control'
                                name='author'
                                value={savedBook.author}
                                onChange={handleUpdate}
                            />
                        </FormGroup>
                        <FormGroup text="genre">
                            <Input
                                type="text"
                                className='form-control'
                                name='genre'
                                //give value of state password
                                value={savedBook.genre}
                                onChange={handleUpdate}
    
                            />
                        </FormGroup> 
    
                        <Button onSubmit={handleSubmit} key={id}>Update Book</Button>
                     </Form>
                </div> 
            </div>
    
    )

}


export default UpdateBook