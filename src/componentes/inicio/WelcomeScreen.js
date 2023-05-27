import React, { useEffect, useState, useContext } from 'react';
import { Recent } from './Recent';
import { UserContext } from '../context/UserContext';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


export const WelcomeScreen = () => {
    const navigate = useNavigate();

    const [listOfPosts, setListOfPosts] = useState([]);
    const { user } = useContext(UserContext);


    
    const handleClick = () => {
       navigate('/posts');
      };

      const handleEdit= () => {
        navigate('/edit');
       };
      
  

  return (
    <>




<h1 className='text-center mt-3 mb-3'>Your lastest post, {user.name} </h1>




<Recent/>

<h1 className='text-center mt-3 mb-3'>Wanna share something else?</h1>
<button className="mt-5 mb-5 btn btn-primary btn-lg d-block mx-auto" onClick={handleClick}>
  Let's Go!
</button>

<h1 className='text-center mt-3 mb-3'>Or maybe you'll like to see all of your posts:</h1>
<button className="mt-5 mb-5 btn btn-primary btn-lg d-block mx-auto" onClick={handleEdit}>
 See All Posts
</button>


    </>
  );
};
