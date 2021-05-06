import React from "react";

const Consumer = ({ item }) => {
  return (
    <article className="consumer">
      <h2>{item.name}</h2>
      <div>
        <p className="info">Email: {item.email}</p>
        <p className="info">
          Occupation Date: {item.occupationDate.slice(0, 10)}
        </p>
        <p className="info">Phone Number: {item.phoneNumber}</p>
      </div>
    </article>
  );
};

export default Consumer;
