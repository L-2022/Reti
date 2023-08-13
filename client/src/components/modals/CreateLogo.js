import React, { useState, useEffect } from 'react';
import {
    createLog,
  } from "../../http/logoAPI";

const CreateLogo = () => {
  const [photoName, setPhotoName] = useState('');
  const [photos, setPhotos] = useState([]);

  const handlePhotoNameChange = (e) => {
    setPhotoName(e.target.value);
  };

  const handlePhotoUpload = (e) => {
    const selectedPhotos = Array.from(e.target.files);
    setPhotos(selectedPhotos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Photo Name:', photoName);
    formData.append('Selected Photos:', photos);
console.log(formData, 1)
createLog(formData)
  };
  return (
    <div>
      <h2>Upload Photos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photoName">Photo Name:</label>
          <input
            type="text"
            id="photoName"
            value={photoName}
            onChange={handlePhotoNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="photoUpload">Upload Photos:</label>
          <input
            type="file"
            id="photoUpload"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLogo;