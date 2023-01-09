import React from 'react'
import { Link } from 'react-router-dom'
import {store} from '../app/store'
import './home.css'
function Home() {
    const reduxstore =store.getState();
    const user = reduxstore.alluser.user
    console.log(user);
    const div = (ele,index) => {

        return(
           <div key = {index} className='user'>
             <label> Name :{ele.name} </label>
             <label> Email :{ele.email} </label>
             <label> Phone : {ele.phone}</label>
             <label> Address : {ele.address}</label>
             <Link to={`/adduser/${index}`}>Edit</Link>
           </div>
        )
    }
    const divuser = user.map((e,index) => div(e,index))
  return (
    <div>
      <Link to="/adduser"><button> Add User </button></Link>
      <div className='allusers'>
        { divuser }
      </div>
    </div>
  )
}

export default Home
