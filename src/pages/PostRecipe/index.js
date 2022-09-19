import './index.css'
import { useState } from "react"

import ImageUpload from '../../components/ImageUpload'

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
                <ImageUpload API_URL={API_URL}/>
            </div>
        </div>
    )
}

export default PostRecipe