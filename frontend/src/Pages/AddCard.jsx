import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosPrivate } from '@/services/apiClient';
import { useNavigate } from 'react-router-dom';
import './AddCard.css';

function AddCard() {
  const [image, setImage] = useState('/img-placeholder.svg');
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  return (
    <div className="add-container">
      <form onSubmit={handleSubmit(async (data) => {
                const response = await axiosPrivate.post("/user/plants", data);
                navigate("/dashboard");
                console.log(response);
              })}>
        <div className="card">
          <h1>Add a Plant</h1>
          <label className="text-label">Name</label>
          <input {...register("plantName")}></input>
          <label className="text-label">Location in your house</label>
          <input {...register("location")}></input>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddCard;
