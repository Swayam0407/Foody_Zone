import React, { useEffect, useState } from "react";
import "./App.css";
import Foody from "./components/Foody";
import NavResult from "./components/NavResult/NavResult";
import Checkout from "./components/Checkout";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [filteredData, setFilteredData] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  function filterFood(type) {
    if (type === "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedButton(type);
  }

  // Fetch from server
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const json = await response.json();
        setData(json);
        setFilteredData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Data:", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Search functionality
  function searchFood(event) {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setFilteredData(data);
      return;
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  }

  function handleItemClick(item) {
    setSelectedItem(item);
  }

  function closeCheckout() {
    setSelectedItem(null);
  }

  return (
    <div className="container">
      <Foody onChange={searchFood} filterFood={filterFood} />
      {data ? (
        <NavResult data={filteredData} onItemClick={handleItemClick} />
      ) : (
        <div>No data found.</div>
      )}
      {selectedItem && <Checkout item={selectedItem} onClose={closeCheckout} />}
    </div>
  );
}

export default App;
