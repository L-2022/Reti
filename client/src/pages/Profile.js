import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { fetchUserInfo } from "../http/logoAPI";
import styles from "./Profile.module.css";
import { Spinner } from "react-bootstrap";

const Profile = observer(() => {
  const [userProfiles, setUserProfiles] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUserInfo()
      .then((data) => {
        setUserProfiles(data);
        console.log(data, 'data1')        
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [loading]);
  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}></div>
      <div className={styles.centre}>
        {userProfiles ? (
          <table className={styles.table}>
            <tr>
              <th>User name</th>
              <th>User role</th>
              <th>City</th>
              {userProfiles.length ? <th>Date</th> : <></>}
            </tr>
           
              <tr>
                <td>{userProfiles.userName}</td>
                <td>{userProfiles.roleUser}</td>
                <td>{userProfiles.city}</td>
              </tr>
          </table>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
});

export default Profile;