import React from "react";
import Consumer from "./Consumer";

const Consumers = ({ info }) => {
  return (
    <div>
      <section>
        <div className="consumerList">
          {info.map((item, index) => (
            <Consumer key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Consumers;
