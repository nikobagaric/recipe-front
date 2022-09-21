import { useState } from 'react'
import LogIn from '../../components/LogIn'
import './index.css'
import axios from 'axios'

const SignUp = (API_URL) => {
    const [logInActive, setLogInActive] = useState(false)
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    )
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        const submitData = new FormData()
        submitData.append(formData)
        axios.post(API_URL+'/register', submitData)
            .then((res) => {
                console.log(res)
            })
    }

    const toggleLogIn = () => {
        setLogInActive(prevState => !prevState)
    }

    return (
        <>
        <div className='auth-container'>
            <div className='auth-form'>
                <div className='username-form form'>
                    <label className='form-label' htmlFor='username'>Username:</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={handleChange}
                        value={formData.username} />
                </div>
                <div className='email-form form'>
                    <label className='form-label' htmlFor='email'>Email:</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={formData.email} />
                </div>
                <div className='password-form form'>
                    <label className='form-label' htmlFor='password'>Password:</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                        value={formData.password} />
                </div>
                <div className='c-password-form form'>
                    <label className='form-label' htmlFor='confirmPassword'>Confirm password:</label>
                    <input
                        className='form-input'
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm password'
                        onChange={handleChange}
                        value={formData.confirmPassword} />
                </div>
                <p className='log-in' onClick={toggleLogIn}>Already have an account?</p>
                <button type='submit' onClick={handleSubmit} className='submit-button'>Register</button>
            </div>
        </div>
            <LogIn active={logInActive} API_URL={API_URL} toggle={toggleLogIn}/>
        </>
    )
}

export default SignUp