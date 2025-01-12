import React, { useState } from 'react';
import './AddCard.css';

function AddCard() {
  const [image, setImage] = useState('/img-placeholder.svg');

  const updateImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="add-container">
      <div className="card">
        <h1>Add a Plant</h1>
        <label className="text-label">Name</label>
        <input></input>
        <label className="text-label">Family Name</label>
        <input></input>
        <img src={image} alt="Plant" />
        <label id="image-label" htmlFor="input-file">Upload Image</label>
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg, image/svg"
          id="input-file"
          onChange={updateImage}
        />
      </div>
    </div>
  );
}

export default AddCard;
