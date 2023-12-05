import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ singleCategoruNews}) => {
  const { _id, title, author, image_url, total_view, rating, details } =
    singleCategoruNews;



  return (
    <Card className="mb-3 mt-3">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ms-2 flex-grow-1">
          <p className="mb-0 fw-bold">{author.name}</p>
          <p className="mb-0">
            {moment(author?.published_date).format("YYYY-MM-DD")}
          </p>
        </div>
        <div>
          <FaBookmark className="me-2"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="my-2">
          { details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 240)}....{" "}
              <Link className="text-primary" to={`/news/${_id}`}>
                Show more
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Rating
          className="text-warning"
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
             readonly />
            <p className="m-0 ms-2">{rating.number}</p>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
