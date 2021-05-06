import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Consumers from "./Consumers";
import MobilePhone from "./MobilePhone";
import LoadMore from "./LoadMore";

const url = "/building-location.json";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [defaultDocs, setDefaultDocs] = useState(2);
  const [isFilter, setIsFilter] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);

      let consumers = [];
      data.locations.forEach((location, i) => {
        if (i <= defaultDocs) {
          location.consumers.forEach((consumer, i) => {
            if (isFilter === null) {
              consumers.push(consumer);
            } else {
              if (isFilter) {
                if (consumer.isPhoneMobile) {
                  consumers.push(consumer);
                }
              } else {
                if (!consumer.isPhoneMobile) {
                  consumers.push(consumer);
                }
              }
            }
          });
        }
      });

      setInfo(consumers);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [defaultDocs]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const _LoadMore = () => {
    setDefaultDocs(defaultDocs + 6);
  };

  const FilterMobilePhone = async (e) => {
    const response = await fetch(url);
    const data = await response.json();
    let consumers = [];
    data.locations.forEach((location, i) => {
      if (i < defaultDocs) {
        location.consumers.forEach((consumer) => {
          consumers.push(consumer);
        });
      }
    });
    let flag = e.target.value === "true" ? true : false;
    setIsFilter(flag);
    let filteredData = consumers.filter((ele) => {
      return ele.isPhoneMobile === flag;
    });
    setInfo([...filteredData]);
  };

  return (
    <main>
      <MobilePhone FilterMobilePhone={FilterMobilePhone} info={info} />
      <Consumers info={info} />
      <LoadMore _LoadMore={_LoadMore} />
    </main>
  );
};

export default Main;
