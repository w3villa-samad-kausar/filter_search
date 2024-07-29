import React, { useState } from 'react';
import './FilterSearch.css';

function FilterSearch() {
    const Fruitdata = [
        { name: "apple", price: 120 },
        { name: "banana", price: 40 },
        { name: "cherry", price: 200 },
        { name: "date", price: 150 },
        { name: "elderberry", price: 300 },
        { name: "fig", price: 250 },
        { name: "grape", price: 90 },
        { name: "honeydew", price: 100 },
        { name: "kiwi", price: 120 },
        { name: "lemon", price: 60 },
        { name: "mango", price: 100 },
        { name: "nectarine", price: 180 },
        { name: "orange", price: 80 },
        { name: "papaya", price: 70 },
        { name: "quince", price: 150 }
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const filterResult = Fruitdata.filter(fruit =>
        fruit.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        fruit.price.toString().includes(searchQuery)
    );

    return (
        <div className="container">
            <input
                type='text'
                placeholder='Search by fruit name or price...'
                value={searchQuery}
                onChange={handleChange}
            />
            <ul>
                {filterResult.map((fruit, index) => (
                    <li key={index}>{fruit.name} - ₹{fruit.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterSearch;
