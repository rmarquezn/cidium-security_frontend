import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { UserContext } from '../context/UserContext';

export function PostEntry(props) {

    const { user } = useContext(UserContext);


    const [postTitle, setPostTitle] = useState('')
    const [postEntry, setPostEntry] = useState('')
    const [postAutor, setPostAutor] = useState('')



    const handlePostTitleChange = (event) =>{
        setPostTitle(event.target.value);

    }
    const handlePostEntryChange = (event) =>{
        setPostEntry(event.target.value);

    }

    const handlePostAutorChange = (event) =>{
        setPostAutor(event.target.value);

    }

    //////////////////////////////////////////////////////////////////
   

    const newPost = (e) => {

        e.preventDefault();
        axios.post("http://localhost:4000/newpost",{
            userName: postAutor,
            postTitle: postTitle,
            postContent:postEntry
        }).then(response=>{
            console.log("Revisando post entry..")
            console.log(` Response: ${response}`)
            if (response.data.err) {
              console.log("Error en create post pá :/")
            }
        
        //para que se actualice en la pantalla?
        //setTodos((prev) => [...prev, res.data]);

        setPostAutor("");
        setPostEntry("");
        setPostTitle("");
      
        }).catch(err => {
          console.log(err)
        })
        
      };
////////////////////////////////////////////////////////////////////////////
    return (

        <div id="inicio-izq" className='form-group mx-4'>

            <div className='font-weight-bold mt-4 mb-4 h1'>{user.name}, what can you share today?</div>

            <label htmlFor='postTitle' className='font-weight-bold h5 mb-2'>Title:</label>
            <input
                    type='postTitle'
                    id='PostTitle'
                    className='form-control'
                    placeholder='An Interesting Title Here'
                    value={postTitle}
                    onChange={handlePostTitleChange}
                    required
                />

<label htmlFor='postTitle' className='font-weight-bold h5 mt-4 mb-2'>Post entry:</label>


            <textarea class="form-control"
                rows="6"
                placeholder="Share the knowledge here..."
                value={postEntry}
                onChange={handlePostEntryChange}></textarea>

<label htmlFor='postTitle' className='font-weight-bold h5 mb-2 mt-2'>Autor:</label>
            <input
                    type='postAutor'
                    id='PostAutor'
                    className='form-control'
                    placeholder='Your AKA here!'
                    value={postAutor}
                    onChange={handlePostAutorChange}
                    required
                />
                <div className='d-flex justify-content-end mt-4'>
            <button
                className='btn btn-dark btn-block'
                onClick={newPost}>

                    

                POST
            </button>
            </div>
        </div>

    )
}