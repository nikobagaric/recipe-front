import { useState } from 'react'
import './index.css'

const SignUp = () => {
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

    return (
        <div className='auth-container'>
            <div className='auth-form'>
                <div className='username-form'>
                    <label className='form-label' htmlFor='username'>Username:</label>
                    <input
                        className='form-input'
                        type='text'
                        id='username'
                        placeholder='Username'
                        onChange={handleChange}
                        value={formData.username} />
                </div>
                <div className='email-form'>
                    <label className='form-label' htmlFor='email'>Email:</label>
                    <input
                        className='form-input'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={formData.email} />
                </div>
                <div className='password-form'>
                    <label className='form-label' htmlFor='password'>Password:</label>
                    <input
                        className='form-input'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={handleChange}
                        value={formData.password} />
                </div>
                <div className='c-password-form'>
                    <label className='form-label' htmlFor='confirmPassword'>Password:</label>
                    <input
                        className='form-input'
                        type='password'
                        id='confirmPassword'
                        placeholder='Confirm password'
                        onChange={handleChange}
                        value={formData.confirmPassword} />
                </div>
                <button type='submit' className='submit-button'>Register</button>
            </div>
        </div>
    )
}

export default SignUp