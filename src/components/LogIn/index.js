import { useState } from "react"
import './index.css'
import { GrClose } from 'react-icons/gr'
import axios from "axios"

const LogIn = (props) => {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
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
        axios.post(props.API_URL+'/login', submitData)
            .then((res) => {
                console.log(res)
            })
    }
    return (
        <>
            <div className={`log-in-container ${props.active ? "active" : ""}`}>
                <div className="auth-form">
                    <div className={`log-in-x-button ${props.active ? "active" : ""}`} onClick={props.toggle}>
                        <GrClose size={'40px'} />
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
                    <button type='submit' onClick={handleSubmit} className='submit-button'>Register</button>
                </div>
            </div>
        </>
    )
}

export default LogIn