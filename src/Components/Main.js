import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Consumers from "./Consumers";
import MobilePhone from "./MobilePhone";
import LoadMore from "./LoadMore";

const url = "/building-location.json";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  // console.log(info);

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

  const FilterMobilePhone = async (e) => {
    const response = await fetch(url);
    const data = await response.json();
    let consumers = [];
    data.locations.forEach((location) => {
      location.consumers.forEach((consumer) => {
        consumers.push(consumer);
      });
    });
    let flag = e.target.value === "true" ? true : false;

    let filteredData = consumers.filter((ele) => {
      return ele.isPhoneMobile === flag;
    });
    setInfo([...filteredData]);
  };

  return (
    <main>
      <MobilePhone FilterMobilePhone={FilterMobilePhone} info={info} />
      <Consumers info={info} />
      <LoadMore />
    </main>
  );
};

export default Main;
