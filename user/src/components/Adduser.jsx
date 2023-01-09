import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './adduser.css'
import { adduser,updateuser } from '../features/userSlice'
import {store} from '../app/store'
import { useParams } from 'react-router-dom'

const Adduser = () => {
    const reduxstore =store.getState();
    const users = reduxstore.alluser.user
    const params = useParams()
    const user = users[params.id]
    let flag=false
    if(user!==undefined){
        flag=true
    }
    const [name, setname ] = useState(flag?user.name:"");
    const [address, setaddress ] = useState(flag?user.address:"");
    const [email, setemail] = useState(flag?user.email:"");
    const [phone, setphone ] = useState(flag?user.phone:"");

    const dispatch = useDispatch();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        flag?
            dispatch(updateuser({
                name:name,
                email: email,
                address: address,
                phone: phone
            })):
            dispatch(adduser({
            name:name,
            email: email,
            address: address,
            phone: phone
            }))

    }
  return (
    <div className='adduser'>
        <Link to='/'>Back to Home</Link>
        <form className='adduserform' onSubmit={(e) => handlesubmit(e)}>
            <h1> Add User Details </h1>
            <input type='name' placeholder='Name' value ={name} onChange={(e) => setname(e.target.value)}/>
            <input type='address' placeholder='Address' value ={address} onChange={(e) => setaddress(e.target.value)}/>
            <input type='phone' placeholder='Phone No.' value ={phone} onChange={(e) => setphone(e.target.value)}/>
            <input type='email' placeholder='Email' value ={email} onChange={(e) => setemail(e.target.value)}/>
            <input type='submit' className='formbtn' value={flag?"Update":"Add User"}/>
        </form>      
    </div>
  )
}
export default Adduser;
