import React from "react";
import Consumer from "./Consumer";

const Consumers = ({ info }) => {
  return (
    <div>
      <section>
        <div>
          <h2>Consumers</h2>
        </div>
        <div>
          {info.map((item, index) => (
            <Consumer key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Consumers;
