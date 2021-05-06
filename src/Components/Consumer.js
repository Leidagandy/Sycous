import React from "react";

const Consumer = ({ item }) => {
  return (
    <ul>
      <li>
        {item.name}
        {item.email}
        {item.occupationDate}
        {item.phoneNumber}
      </li>
    </ul>
  );
};

export default Consumer;
