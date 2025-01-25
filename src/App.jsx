import { useState, useEffect } from "react";
import { fetchAllMeteorites } from "./api-calls/nasa";
import { Map } from "./components/Map";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllMeteorites()
      .then(({ data }) => {
        setMeteoriteData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Map data={meteoriteData} loading={isLoading} error={isError} />
          }
        />
      </Routes>
    </>
  );
}
export default App;
