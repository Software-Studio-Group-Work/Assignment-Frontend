import React from "react";
import { Card } from "react-bootstrap";
import "./Landmarks.css";
function Landmarks() {
  const places = Array(12).fill(0);
  return (
    <div>
      <div id="title-service">
        สถานที่สำคัญทางศาสนา
        <hr></hr>
      </div>
      <div id="card-container">
        {places.map((place, index) => {
          return (
            <Card key={index} style={{ width: "25%" }} id="card-service">
              <Card.Img
                variant="top"
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
              />
              <Card.Body>
                <Card.Title>สถานที่</Card.Title>
                <Card.Text>รายละเอียด</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Landmarks;
