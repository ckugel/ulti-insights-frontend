import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar/SearchBar";
import './MainPage.css';

const MainPage = () => {
    const onSearch = (query) => {
        console.log(`Search query: ${query}`);
    };

    return (
        <div className="main-page">
            <header className="App-header">
                <h1>Welcome to Stadiscticts</h1>
            </header>
            <main>
                <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', height: '30px' }}>
                    <SearchBar onSearch={onSearch} />
                </div>
                <p>Explore players and teams:</p>
            </main>
        </div>
    );
};

export default MainPage;