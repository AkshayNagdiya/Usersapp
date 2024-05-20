import React, { useContext, useEffect } from 'react'
import UserContext from '../Context/UserContext'
import { fetchsingleuser } from '../Context/UserAction';

const UserPage = () => {


    const {dispatc, user} = useContext(UserContext);


    const getuser = async(id)=>{
        const data = await fetchsingleuser(id);
        dispatch({
            type : "GET_USER",
            payload : data,
        })
    }
    useEffect(()=>{
        getuser();
    },[])

    if(!user){
        return (
            <h1 className="text-center dsplay-1">User Not Found!</h1>
        )
    }

  return (
    <div className='container p-5'>
      <h1 className='text-center '>Welcome {user.name}</h1>
    </div>
  )
}

export default UserPage;
