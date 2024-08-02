import React, { Component } from 'react';


function SearchBar() {
    return (
        <>
        <div className="searchbar">
            <input type="text" placeholder='Search movies and more...' />
            <button>Search</button>
        </div>
        </>
     );
}

export default SearchBar;