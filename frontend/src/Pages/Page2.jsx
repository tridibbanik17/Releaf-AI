import "./Page2.css"
import React, { useState } from 'react'
//import { SAMPLE_DATA } from "./data";

function Page2() {
  return (
    <>
      <h1 id="header">Welcome </h1>
      <div classname="card-container">
      <PlantCard
        imageSrc="./src/assets/plant.jpg"
        text="Plant"
      />
      <PlantCard
        imageSrc="./src/assets/plant.jpg"
        text="Plant 1"
      />
      <PlantCard
        imageSrc="./src/assets/plant.jpg"
        text="Plant 2"
      />
      <AddCard></AddCard>
      </div>
    </>
  )
}

function PlantCard({ imageSrc, text }) {
  const [showDetails, setShowDetails] = useState(false)

  const handleToggleDetails = () => {
    setShowDetails(prev => !prev)
  }

  const handleDelete = () => {

  }

  return (
      <div className="card">
        <button className="delete-btn" onClick={handleDelete}>
          X
        </button>
        <img src={imageSrc} alt="Plant" onClick={handleToggleDetails} className="card-image" />
        <div className="card-text" onClick={handleToggleDetails}>{text}</div>

        {showDetails && (
          <div className="cardDetails">
            <p id='additional'>Additional card details</p>
          </div>
        )}
      </div>
  )
}

function AddCard() {
  const handleAdd = () => {
    
  }

  return (
    <div className="add-card">
      <button onClick={handleAdd}>
        +
      </button>
    </div>
  )
}

export default Page2