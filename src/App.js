import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [counties, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const fetchCounties = () => {
    const URL = "https://xcountries-backend.azurewebsites.net/all";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchCounties();
  }, []);

  return (
    <main>
      <h1>XCountries</h1>
      {error ? (
        <h2>"Error fetching data : {error}"</h2>
      ) : (
        <div className="container">
          {counties.map((country, index) => (
            <Card data={country} key={index} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
