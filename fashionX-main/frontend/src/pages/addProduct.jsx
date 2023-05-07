import React, { useState } from "react";
import "./Company.css";

function Company() {
  const [formData, setFormData] = useState({
    image: "",
    description: "",
    phoneNumber: "",
    email: "",
    website: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Send form data to server
  };

  return (
    
    <div className="company-container">
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      <h1>Company Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input type="url" id="website" name="website" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Company;
