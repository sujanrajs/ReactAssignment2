import { useState, useEffect } from "react";

const hocCountry = (Component, cname) => {
  const HocCountry = (props) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const url = `https://restcountries.com/v3.1/name/${cname}`;

    const getCountry = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Error, Request Not Found!");
        }
        const res = await req.json();
        setData(res);
      } catch (err) {
        setError(err.message);
      }
    };

    useEffect(() => {
      getCountry();
    });
    return <Component {...props} country={data} error={error} />;
  };
  return HocCountry;
};

export default hocCountry;
