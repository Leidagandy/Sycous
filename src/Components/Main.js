import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Consumers from "./Consumers";

const url = "/building-location.json";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  console.log(info);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      console.log("data----", data);

      let consumers = [];
      data.locations.forEach((location) => {
        location.consumers.forEach((consumer) => {
          consumers.push(consumer);
        });
      });
      setInfo(consumers);
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

  const handlePhoneFilter = () => {
    const filterdData = info.filter((row) => row.isPhoneMobile);
    setInfo(filterdData);
  };

  return (
    <main>
      <button onClick={handlePhoneFilter}>Phone Filter </button>
      <Consumers info={info} />
    </main>
  );
};

export default Main;
