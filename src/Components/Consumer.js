import React from "react";

const Consumer = ({ name, email }) => {
  return (
    <ul>
      <li>
        {name}
        {email}
      </li>
    </ul>
  );
};

export default Consumer;
