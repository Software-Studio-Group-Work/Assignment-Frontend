import React from "react";
import AnnouncementForm from "../../components/AnnouncementForm/AnnouncementForm";

function CreateAnnounce() {
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>สร้างประกาศ</div>
      <AnnouncementForm type="create" />
    </div>
  );
}

export default CreateAnnounce;
