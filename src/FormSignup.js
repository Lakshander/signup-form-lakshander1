import React from 'react';
import validateInfo from './validateInfo';
import useForm from './useForm';
import axios from "axios";
import './Form.css';


const FormSignup = ({submitForm}) => {

    const subscriptionError =() => {
        
        // alert("Invalid Subscription Key");
        
    }
    const {handleChange, handleSubmit, values, errors} = useForm(submitForm, validateInfo);
    const handleApi = () => {
        // console.log(values.username, values.email, values.password, values.subscriptionkey);
        axios.post('http://localhost:8080/api/login/createGymAccount', {
            accountEmail: values.email,
            accountName: values.username,
            accountPassword: values.password,
            subscriptionKey: values.subscriptionkey
        })
        .then((response) => {
           console.log(response);
            alert(response.data)
          // console.log(nextPage);
            // alert(response.data)
        }) 
        // .then(result => {
        //     console.log(result)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Hey, Create your account by filling out the
                    information below & start using Grizfit.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Subscription Key</label>
                    <input
                        className='form-input'
                        type='text'
                        name='subscriptionkey'
                        placeholder='Enter Subscription Key'
                        value={values.subscriptionkey}
                        onChange={handleChange}
                    />
                    {errors.subscriptionkey && <p>{errors.subscriptionkey}</p>}
                </div>
                <button className='form-input-btn' type='submit' onClick={handleApi}>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Dont have Subscription Key? <a href='https://www.google.com/'>Buy Now</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup