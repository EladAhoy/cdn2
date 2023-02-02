import React, { useState } from 'react';
import "./DropDown.css";

function DropdownMenu({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>
        {options.label}
      </button>
      {isOpen && (
        <ul className='nested-dropdown-list'>
          {options.children.map((child, index) => (
            <li key={index}>
              {child.children ? (
                <DropdownMenu options={child} />
              ) : (
                <button>{child.label}</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function DropDownNavbar({ options }) {
  return (
    <nav className='dropdown-navbar'>
      <h1>Dropdown Navbar</h1>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option.children ? (
              <DropdownMenu options={option} />
            ) : (
              <button>{option.label}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}


