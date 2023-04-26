import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
const Home = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div
      className="container d-flex justify-content-between flex-wrap"
      style={{ width: "80%" }}
    >
      {movies.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img height={"80%"} variant="top" src={item.image} />
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.decsription}</Card.Text>
            <Link to={item.trailer}>
              <Button variant="primary">Watch trailer</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
