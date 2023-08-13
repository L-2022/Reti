import {
  SHOP_ROUTE,
} from "../utils/consts";
import React, { useContext, useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { createLogo } from "../http/logoAPI";
import styles from "./CreateLogo.module.css";
import { useHistory } from "react-router-dom";
function CreateForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState(null);
  const [listRatings, setRatingsToList] = useState([]);

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const addRatingsToList = () => {
    setRatingsToList([
      ...listRatings,
      { titleReting: "", number: Date.now() },
    ]);
  };
  const removeRatingsToList = (number) => {
    setRatingsToList(listRatings.filter((i) => i.number !== number));
  };
  const changeRatingsToList = (key, value, number) => {
    setRatingsToList(
      listRatings.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("img", img);    
    formData.append("listRatings", JSON.stringify(listRatings));
    try {
      createLogo(formData); // to deviceAPI
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.createLogoContainer}>
      <h2>Create</h2>
      <form onSubmit={handleSubmit} >
        <label className={styles.formLabelName}>
          Name: 
          <input className={styles.inputField}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>
        <label className={styles.formLabel}>
          City:
          <input className={styles.inputField}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label className={styles.formLabel}>
          Country:
          <input className={styles.inputField}
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label className={styles.formLabel}>
          Address:
          <input className={styles.inputField}
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label className={styles.formLabel}>
          Image logo:
          <input type="file" onChange={handleFileChange} />
        </label>
        <label className={styles.formLabel}>
          Description:
          <input className={styles.inputField}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
     <div className={styles.formLabel}>
        <button  className={styles.addRetingButton} variant={"outline-dark"} onClick={addRatingsToList}>
          Add new reting
        </button>
       
          {listRatings.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control className={styles.formLabel}
                  value={i.titleReting}
                  onChange={(e) =>
                    changeRatingsToList("titleReting", e.target.value, i.number)
                  }
                  placeholder="Enter reting name"
                />
              </Col>


              <Col md={4}>
                <button className={styles.removeRetingButton} 
                  onClick={() => removeRatingsToList(i.number)}
                  variant={"outline-danger"}
                >
                  Dell
                </button>{" "}
              </Col>
            </Row>
          ))}
          <br></br>
          <button  to={SHOP_ROUTE} className={styles.submitButton}  ty e="submit" onClick={() => history.push(SHOP_ROUTE)}>Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
