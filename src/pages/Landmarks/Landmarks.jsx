import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./Landmarks.css";
import { useGetPlaces, useDeletePlace } from "../../hooks/usePlace";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
function Landmarks() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { data: places, isLoading, isError } = useGetPlaces();
  const {
    mutate: deletePlace,
    isSuccess: isDeleteSuccess,
    isLoading: isDeleteLoading,
  } = useDeletePlace();

  const onDelete = (id) => {
    if (window.confirm("คุณต้องการลบสถานที่นี้หรือไม่?")) {
      deletePlace(id);
    }
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      navigate("/landmarks");
    }
  }, [isDeleteSuccess, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="landmark">
      <div id="title-service">
        สถานที่สำคัญทางศาสนา
        <hr></hr>
      </div>
      <div id="card-container">
        {places.map((place, index) => {
          return (
            <Card key={index} className="card-service">
              <a href={place.link} target="_blank" rel="noreferrer">
                <Card.Img variant="top" src={place.picture} />
              </a>
              <Card.Body>
                <Card.Title>{place.title}</Card.Title>
                <Card.Text>
                  {isDeleteLoading ? "กำลังลบ..." : place.description}
                </Card.Text>
                {user?.role === "admin" && (
                  <div className="place-icons">
                    <AiFillEdit
                      onClick={() => navigate(`/edit-landmark/${place.id}`)}
                    />
                    <AiFillDelete onClick={() => onDelete(place.id)} />
                  </div>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Landmarks;
