import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RecipeListView from './components/RecipeListView';
import CreateRecipePage from './components/CreateRecipePage';
import RecipeDetailPage from './components/RecipeDetailPage';
import UserProfilePage from './components/UserProfilePage';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/recipes" element={<RecipeListView/>} />
                        <Route path="/create-recipe" element={<CreateRecipePage/>} />
                        <Route path="/recipe/:id" element={<RecipeDetailPage/>} />
                        <Route path="/user/:id" element={<UserProfilePage/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
