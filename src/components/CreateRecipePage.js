import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateRecipePage.css';

const CreateRecipePage = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Title', title);
        formData.append('Image', image);
        formData.append('Ingredients', ingredients);
        formData.append('Description', instructions);

        try {
            const response = await axios.post('http://localhost:8080/recipe/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            navigate('/recipes');
        } catch (error) {
            console.error('Recipe submission failed:', error);
            setError('Recipe submission failed. Please try again.');
        }
    };

    return (
        <div className="create-recipe-container">
            <h2 className="create-recipe-title">Create a New Recipe</h2>
            <form onSubmit={handleSubmit} className="create-recipe-form">
                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="create-recipe-input"
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="create-recipe-file-input"
                    required
                />
                <textarea
                    placeholder="Ingredients (comma-separated)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="create-recipe-textarea"
                    required
                ></textarea>
                <textarea
                    placeholder="Instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    className="create-recipe-textarea"
                    required
                ></textarea>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="create-recipe-button">Submit Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipePage;
