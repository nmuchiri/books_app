import React, { useState, useRef } from 'react'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// import CheckButton from 'react-validation/build/button'
import FormGroup from './common/FormGroup'
import { Button} from 'semantic-ui-react'

import { save } from '../services/book.service'

const CreateBook = ()=>{

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')

    const onChangeTitle = (e) => {
        const title= e.target.value
        setTitle(title)
    }

    const onChangeAuthor = (e) => {
        const author = e.target.value
        setAuthor(author)
    }
    const onChangeGenre = (e) => {
        const genre = e.target.value
        setGenre(genre)
    }

    const handleSave = (e) => {
        e.preventDefault()
        save(
            // bookId,
            title,
            author,
            genre
        ).then (res => {
            console.log(res)
        })
        // history.push('/')
        // window.location.reload()
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="book-img"
                    className="book-img-card"
                />
                <Form onSubmit={handleSave}>
                    <FormGroup text="title">
                        <Input
                            type='text'
                            className='form-control'
                            name='title'
                            value={title}
                            onChange={onChangeTitle}
                            // validations={[required, vusername]}
                        />
                    </FormGroup>
                    <FormGroup text="author">
                        <Input
                            type='text'
                            className='form-control'
                            name='author'
                            value={author}
                            onChange={onChangeAuthor}
                            // validations={[required, validEmail]}
                        />
                    </FormGroup>
                    <FormGroup text="genre">
                        <Input
                            type="text"
                            className='form-control'
                            name='genre'
                            //give value of state password
                            value={genre}
                            onChange={onChangeGenre}
                            // validations={[required, vpassword]}
                        />
                    </FormGroup>

                    <Button>Save Book</Button>

                    {/* {message && (
                        <div className="form-group">
                            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {message} */}
                            {/* </div> */}
                        {/* </div> */}
                    
                    {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                </Form>
            </div>
        </div>
    )
}

export default CreateBook

