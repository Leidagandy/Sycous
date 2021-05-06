import React from "react";
import Consumer from "./Consumer";

const Consumers = ({ consumers }) => {
  console.log(consumers);
  return (
    <div>
      <section>
        <div>
          <h2>Consumers</h2>
        </div>
        <div>
          {consumers.map((consumer, index) => {
            return <Consumer key={index} {...consumer} />;
           
          })}
        </div>
      </section>
    </div>
  );
};

export default Consumers;
