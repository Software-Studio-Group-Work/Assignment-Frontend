import React from "react";
import LandmarkForm from "../../components/LandmarkForm/LandmarkForm";

function CreateLandmark() {
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>
        เพิ่มสถานที่สำคัญ
      </div>
      <LandmarkForm type="create" />
    </div>
  );
}

export default CreateLandmark;
