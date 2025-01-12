import { axiosPrivate } from "@/services/apiClient";
import "./Page2.css";
import React, { useEffect, useState } from "react";

function Page2() {
  const [selectedPlant, setSelectedPlant] = useState(null); // State for the selected plant
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      try {
        const { data } = await axiosPrivate.get("/user/plants");
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };

    getPlants();
  }, []);

  const handleToggleDetails = (plant) => {
    setSelectedPlant(plant);
  };

  return (
    <>
      <h1 id="introtext">Welcome to your home garden!</h1>
      <h2 id="bodytext">Keep track of the house plants in your home here</h2>

      <div className="dash-card-container">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onClick={() => handleToggleDetails(plant)}
          />
        ))}
        <AddCard />
      </div>

      {selectedPlant && (
        <div className="dash-details">
          <h2 className="dash-details-title">Plant Details</h2>
          <img
            src={selectedPlant.imageUrl}
            alt={selectedPlant.plantName}
            className="dash-details-image"
          />
          <div className="dash-details-info">
            <h3>{selectedPlant.plantName}</h3>
            <p><strong>Location:</strong> {selectedPlant.location}</p>
            {selectedPlant.maintenance && <p><strong>Maintenance:</strong> {selectedPlant.maintenance}</p>}
            {selectedPlant.sunlight && <p><strong>Sunlight:</strong> {selectedPlant.sunlight}</p>}
            {selectedPlant.watering && <p><strong>Watering:</strong> {selectedPlant.watering}</p>}
            {selectedPlant.lifespan && <p><strong>Lifespan:</strong> {selectedPlant.lifespan}</p>}
            {selectedPlant.generalTips && <p><strong>General Tips:</strong> {selectedPlant.generalTips}</p>}
            {selectedPlant.benefits && <p><strong>Benefits:</strong> {selectedPlant.benefits}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export function PlantCard({ plant, onClick }) {
  return (
    <div className="dash-card" onClick={onClick}>
      <img src={plant.imageUrl} alt={plant.plantName} className="dash-card-image" />
      <div className="dash-card-text">{plant.plantName}</div>
    </div>
  );
}

function AddCard({setCards}) {
  return (
    <div className="add-card">
      <a display="none" href="/dashboard/add">
      <button onClick={setCards}>+</button>
      </a>
    </div>
  );
}

export default Page2;
