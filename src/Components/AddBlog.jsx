import React from "react";
import { Button } from "react-bootstrap";

const AddBlog = () => {
  return (
    <div style={{ position: "relative" }}>
      <Button
        style={{
          position: "absolute",
          marginTop: "10%",
          left: "40%",
          right: "40%",
        }}
        variant="success"
      >
        Add Block
      </Button>
    </div>
  );
};

export default AddBlog;
