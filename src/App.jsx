import { useEffect, useState } from "react";
import Header from "./components/Header";
import PlantPage from "./components/PlantPage";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/plants`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setPlants)
      .catch(() =>
        setError(
          "Could not connect to the server. Make sure it's running on port 6001."
        )
      );
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  return (
    <div className="app">
      <Header />
      {error && <p className="error-banner">{error}</p>}
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
