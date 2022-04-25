import React from "react";
import LandmarkForm from "../../components/LandmarkForm/LandmarkForm";
import { useGetPlace } from "../../hooks/usePlace";
import { useParams } from "react-router-dom";

function EditLandmark() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPlace(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>
        แก้ไขสถานที่สำคัญ
      </div>
      <LandmarkForm type="edit" data={data} />
    </div>
  );
}

export default EditLandmark;
