import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfilePage.css';

const UserProfilePage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`localhost:8080/api/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="profile-container">
            <h2 className="profile-title">{user.name}'s Profile</h2>
            <p className="profile-email">Email: {user.email}</p>
            {/* Assuming user has a list of recipes */}
            <h3>Recipes</h3>
            <ul className="profile-recipes">
                {user.recipes && user.recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfilePage;
