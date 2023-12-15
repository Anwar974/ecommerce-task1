import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik'
import {loginSchema} from '../validation/validate.js'
import *  as yup from 'yup'
import {toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login({saveCurrentUser}) {
const navigate =useNavigate();
    const initialValues ={
        email:'',
        password:'',
    };

   
   const  onSubmit = async users=>{
      
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users)
        console.log(data);

        if(data.message=='success'){
            localStorage.setItem('userToken',data.token)
            saveCurrentUser();
            toast.success('login successfully', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate('/home')
        }
   }
   
    const formik = useFormik({
        initialValues,
        onSubmit,
       validationSchema : loginSchema,
    });

    const inputs =[
       {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'user email',
            value: formik.values.email,
        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'user password',
            value: formik.values.password
        },
        
    ]

    const renderInputs = inputs.map((input, index)=>
    <Input 
    type={input.type} 
    id={input.id} 
    name={input.name} 
    title={input.title} 
    key={index} 
    value={input.value} 
    errors={formik.errors} 
    onChange={formik.handleChange } 
    onBlur={formik.handleBlur}
    touched={formik.touched}
     />
    )

  return (
<>
<div className="container bg-dark text-white">

    <h2>Login</h2>

<div className="w-50" >
    <form onSubmit={formik.handleSubmit} >
        {renderInputs}

        <button type='submit' disabled={!formik.isValid}>Login</button>
    </form>

    </div>
</div>

</>  )
}
