import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeListView = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/recipe/get');
                setRecipes(response.data);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>All Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <img src={`../assets/background-image.jpg.jpg/${recipe.Image}`} alt={recipe.Title} width="100" />
                            {recipe.Title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeListView;
