import useCountry from "../Hooks/useCountry";

const HookedCountry = () => {
  console.log("before state");

  const [country, error] = useCountry("Finland");
  console.log("using Hook", country);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {country &&
            country.map((country_name) => {
              return (
                <div>
                  <p>
                    Fetched Country Name using React Hook:{" "}
                    {country_name.name.common}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HookedCountry;
