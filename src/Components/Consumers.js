import React from "react";
import Consumer from "./Consumer";

const Consumers = ({ info }) => {
  console.log(info);
  info.map((item) => console.log(item.name));
  return (
    <div>
      <section>
        <div>
          <h2>Consumers</h2>
        </div>
        <div>
          (return{" "}
          {info.map((item) => (
            <Consumer name={item.name} />
      
          ))}
          )
        </div>
      </section>
    </div>
  );
};

export default Consumers;
