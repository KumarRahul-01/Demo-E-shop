import React, { useState } from 'react'

const SideNavbar = ({ categories, onSelectCategory }) => {
    return (
      <div className="sidenav">
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => onSelectCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default SideNavbar;