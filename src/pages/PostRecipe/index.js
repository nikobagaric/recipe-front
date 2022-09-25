import './index.css'
import { useState } from "react"
import axios from 'axios'

const PostRecipe = ({ API_URL }) => {
    const [formData, setFormData] = useState(
        {
            title: '',
            description: '',
            time_minutes: '',
            cost: 0,
            ingredients: [''],
            tags: [''],
            image: '',
        }
    )
    const [image, setImage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleImageChange = (event) => {
        console.log(event.target.files)
        setImage(event.target.files[0])
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [image]: image,
            }
        })
    }

    //connect to back-end
    const handleSubmit = () => {
        const submitData = new FormData()
        submitData.append(formData)
        axios.post(API_URL+'/recipe/post', submitData)
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <div className="recipe-upload-container">
            <div className="recipe-upload">
                <div className="recipe-upload-form post-form">
                    <label className="title-label post-form-label" htmlFor="title">Recipe title:</label>
                    <input className="title-form post-form-input"
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        value={formData.title}></input>
                    <label className="title-label post-form-label" htmlFor="title">Recipe description:</label>
                    <textarea className="description-form post-form-input"
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        value={formData.description}></textarea>
                    <label className="title-label post-form-label" htmlFor="title">Recipe ingredients:</label>
                    <input className="ingredients-form post-form-input"
                        type="text"
                        name="ingredients"
                        placeholder="Ingredients"
                        onChange={handleChange}
                        value={formData.ingredients}></input>
                    <label className="title-label post-form-label" htmlFor="title">Time required:</label>
                    <input className="time_minutes-form post-form-input"
                        type="text"
                        name="time_minutes"
                        placeholder="Time in minutes"
                        onChange={handleChange}
                        value={formData.time_minutes}></input>
                    <label className="title-label post-form-label" htmlFor="title">Estimated cost:</label>
                    <input className="cost-form post-form-input"
                        type="text"
                        name="cost"
                        placeholder="Cost"
                        onChange={handleChange}
                        value={formData.cost}></input>
                    <label className="title-label post-form-label" htmlFor="title">Recipe tags:</label>
                    <input className="tags-form post-form-input"
                        type="text"
                        name="tags"
                        placeholder="Tags"
                        onChange={handleChange}
                        value={formData.tags}></input>
                </div>
            </div>
            <div className='default-container'>
                <div className="image-upload-container">
                    <div className='uploaded-image-container'>
                        <img className='uploaded-image' src={image && URL.createObjectURL(image)} alt="goofy ahh uncle productions"/>
                    </div>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <button className='submit-button' onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    )
}

export default PostRecipe