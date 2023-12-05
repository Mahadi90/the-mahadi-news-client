import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { Card, Row } from "react-bootstrap";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Category</h2>
      <div className="">
        {categories.map((category) => (
          <p className="bg-light p-2" key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="ms-3 text-decoration-none text-dark"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="my-2">
        <Card border="primary">
          <Card.Header>
          <Card.Img variant="top" src={first} />
          </Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary" className="my-3">
          <Card.Header>
          <Card.Img variant="top" src={second} />
          </Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary">
          <Card.Header>
          <Card.Img variant="top" src={third} />
          </Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LeftNav;
