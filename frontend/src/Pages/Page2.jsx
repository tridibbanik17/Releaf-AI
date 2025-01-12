import "./Page2.css"
import React, { useState } from 'react'

function Page2() {
  return (
    <>
      <h1>Welcome </h1>
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
    <div className="card-containef">
      <div className="card" onClick={handleToggleDetails}>
        <button className="delete-btn" onClick={handleDelete}>
          X
        </button>
        <img src={imageSrc} alt="Plant" className="card-image" />
        <div className="card-text">{text}</div>

        {showDetails && (
          <div className="cardDetails">
            <p>Additional card details</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page2