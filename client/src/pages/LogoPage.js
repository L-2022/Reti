import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneLogo } from "../http/logoAPI";
import Reviews from "../components/UI/Reviews";
import Reting from "../components/UI/Reting";
import styles from "./LogoPage.module.css";

const LogoPage = () => {
  const [logo, setLogo] = useState({ listRatings: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneLogo(id).then((data) => setLogo(data));
  }, []);
  return (
    <div className={styles.deviceBody}>
      <h2 className={styles.deviceName}>{logo.name}</h2>
      <div className={styles.deviceBlok}>
        <img
          className={styles.deviceImage}
          src={process.env.REACT_APP_API_URL + logo.img}
          alt=""
        />
        <div>
          <h4>
            Location: {logo.country}-{logo.city}-{logo.address}
          </h4>
        </div>
      </div>
      <h1>Retings</h1>
      <div className={styles.infoDevice}>
        {!logo.listRatings ? (
          <>Without Retings</>
        ) : (
          logo.listRatings.map((listRatings, index) => (
            <div
              className={styles.listParam}
              key={listRatings.id}
              style={{
                background: "LightGray",
                // background: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              <p>titleReting - {listRatings.titleReting}</p>
              <p>logoId - {listRatings.logoId}</p>
              <p>listRatings.id-{listRatings.id} </p>
              <Reting key={index} listRatingsId={listRatings.id} logoId={id} />
            </div>
          ))
        )}
      </div>
      <h1>Description</h1>
      <div className={styles.infoDevice}>{logo.description}</div>

      <h1>Reviews</h1>
      <Reviews id={logo.id} />
    </div>
  );
};

export default LogoPage;
