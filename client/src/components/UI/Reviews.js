import { Row } from "react-bootstrap";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { createReview, fetchReviews } from "../../http/logoAPI";
import { Context } from "../../index";

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const { user } = useContext(Context);
  const [data, setReviews] = useState([]);

  let infoReviews = "";
  useEffect(() => {
    fetchReviews(id)
      .then((data) => setReviews(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    createReview({ id, review }).then((review) => {
      setReview("");
      fetchReviews(id).then((data) => setReviews(data));
    });
  }

  return (
    <div class="blocListReview">
      <>
        {user.isAuth ? (
          <form className="formReviev" onSubmit={handleFormSubmit}>
            <input
              className="inputReview"
              type="text"
              placeholder="Your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></input>
            <button className="buttonReview" type="submit">
              Send
            </button>
          </form>
        ) : (
          <>You need to register to add a review</>
        )}
      </>
      {data.length ? (
        data.map((el, index) => (
          <Row
            className="listReview"
            key={el.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {el.userName}: {el.review}
          </Row>
        ))
      ) : (
        <p>{infoReviews}</p>
      )}
    </div>
  );
};

export default Reviews;
