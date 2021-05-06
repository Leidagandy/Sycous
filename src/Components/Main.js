import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Consumers from "./Consumers";

const url = "/building-location.json";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [consumers, setConsumers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setConsumers(data.locations);
      console.log(data.locations);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Consumers consumers={consumers} />
    </main>
  );
};

export default Main;
