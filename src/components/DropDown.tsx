import React, { useState } from "react";
import { FixMeLater } from "../types/general";
import "./DropDown.css";

function DropdownMenu({ options }: FixMeLater) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>{options.label}</button>
      {isOpen && (
        <ul className="nested-dropdown-list">
          {options.children.map((child: FixMeLater, index: FixMeLater) => (
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

export default function DropDownNavbar({ options }: FixMeLater) {
  return (
    <nav className="dropdown-navbar">
      <h1>Dropdown Navbar</h1>
      <ul>
        {options.map((option: FixMeLater, index: FixMeLater) => (
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
