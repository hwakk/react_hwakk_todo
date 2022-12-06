import React from "react";

function Header({ filters, filter, onFilterChange }) {
  // darkmode 버튼 만들기
  // filter 버튼 만들기

  const onClick = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={onClick} value={value}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
