import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../Context/UserContext'

const Cards = ({users}) => {
  const {user} = useContext(UserContext)
  return (
    <div className="col-md-6 col-sm-12 col-lg-4">
        <div className="card p-3 rounded-0 shadow-sm">
            <h3 className="card-title">{users.name}</h3>
            <p className="text-secondary">{users.email}</p>
            <Link to={`user/${user?.id}`} className="btn btn-sm w-100 btn-primary">View User</Link>
        </div>
    </div>

  )
}

export default Cards
