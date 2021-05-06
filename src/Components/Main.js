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
      // setInfo(data.locations[1].consumers);
      data.locations.map((location) => setInfo(location.consumers));

      // console.log(data.locations[1].consumers);
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
      <Consumers info={info} />
    </main>
  );
};

export default Main;
