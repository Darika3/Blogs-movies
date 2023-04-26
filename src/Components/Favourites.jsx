import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = ({ movies }) => {
  function favs() {
    return movies.filter((item) => item.category === "fav");
  }

  useEffect(() => {
    favs();
  }, []);

  const favouriteMovies = favs();

  return (
    <div
      className="container d-flex justify-content-between flex-wrap"
      style={{ width: "80%" }}
    >
      {favouriteMovies.map((item) => (
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
export default Favourites;
