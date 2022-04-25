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
  const { mutate: deletePlace, isSuccess: isDeleteSuccess } = useDeletePlace();

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
    <div>
      <div id="title-service">
        สถานที่สำคัญทางศาสนา
        <hr></hr>
      </div>
      <div id="card-container">
        {places.map((place, index) => {
          return (
            <Card key={index} className="card-service">
              <Card.Img
                variant="top"
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
              />
              <Card.Body>
                <Card.Title>{place.title}</Card.Title>
                <Card.Text>{place.description}</Card.Text>
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
