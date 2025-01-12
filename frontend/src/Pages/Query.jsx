import "./Query.css";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosPrivate } from "@/services/apiClient";

function Query() {
  const [input, setInput] = useState("");
  const { register, getValues, setValue } = useForm();
  const [plants, setPlants] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setValue("query", value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axiosPrivate.post("/search", getValues()).then(({ data }) => {
        const valuesArray = Object.values(data);
        setPlants(valuesArray);
      });
    } catch (error) {
      console.error("Error submitting the query:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <>
      {/* Header Section */}
      <div id="image">
        <h2 id="introtext">
          <b id="greentext">Interested</b> in house plants? Start <b id='greentext'>here!</b>
        </h2>
        <h4 id="bodytext">
          Start your journey by conversing with AI to give you some ideas.
        </h4>
      </div>

      {/* Search Box */}
      <div id="box">
        <form onSubmit={handleSubmit}>
          <div id="searching">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              {...register("query")}
            />
          </div>
        </form>
      </div>

      {/* Suggested Plants Section */}
      <div className="res-results">
        <h3 className="res-results-title">Suggested Plants</h3>
        <div className="res-results-container">
          {plants.length > 0 ? (
            plants.map((plant, index) => <ResultCard key={index} plant={plant} />)
          ) : (
            <p className="res-no-results">No plants found. Try a different search!</p>
          )}
        </div>
      </div>
    </>
  );
}

function ResultCard({ plant }) {
  return (
    <div className="res-card">
      <img src={plant.imageUrl} alt={plant.common_name} className="res-card-image" />
      <div className="res-card-body">
        <h4 className="res-card-title">{plant.common_name}</h4>
        <p className="res-card-subtitle">
          <i>{plant.scientific_name}</i>
        </p>
        <div className="res-card-info">
          <p>
            <strong>Watering:</strong> {plant.watering}
          </p>
          <p>
            <strong>Sunlight:</strong> {plant.sunlight}
          </p>
        </div>
        <p className="res-card-benefits">{plant.benefits}</p>
      </div>
    </div>
  );
}

export default Query;
