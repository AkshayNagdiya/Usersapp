import React, { useContext, useEffect } from 'react'
import Cards from '../Components/Cards'
import UserContext from '../Context/UserContext'
import { fetchUser } from '../Context/UserAction'



const Home = () => {
    const {users , dispatch} = useContext(UserContext)

    const getuser = async () =>{
      const data =await fetchUser();
      dispatch({
        type: "GET_USERS",
        payload : data,
      })
    }
    useEffect(()=>{
      getuser();
    },[])

    if(users.length === 0){
      return(
        <h1 className="text-center dispalay-1 my-10">Loading ....</h1>
      )
    }

  return (
    <div className='container'>
    <h1 className='text-center dispalay-1 my-2'>Users</h1>
    <div className="row g-2 mt-2">
       {
        users.map(users => <Cards key={users.id} users={users}/>)
       }
    </div>
      
    </div>
  )
}

export default Home
