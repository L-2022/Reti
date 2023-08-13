import { useHistory } from "react-router-dom";
import { LOGO_ROUTE } from "../../utils/consts";
import styles from "./LogoItem.module.css";
const LogoItem = ({ logo }) => {
  const history = useHistory();
  console.log(logo.name);
  return (
    <div className={styles.menu}>
      <div className={styles.menu__wrapper}>
        <div className={styles.menu_list}>
          <img
            onClick={() => history.push(LOGO_ROUTE + "/" + logo.id)}
            src={process.env.REACT_APP_API_URL + logo.img}
            alt=""
          />
          <div className={styles.deviceDescribeInList}>
            <div className={styles.retingPriseBasket}></div>
          </div>
          <p>{logo.name}</p>
          <p>{logo.city}</p>
          <p>{logo.country}</p>
          <p>{logo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default LogoItem;
