import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAddAnnouncement } from "../../hooks/useAnnouncement";
import { UserContext } from "../../contexts/UserContext";
import AnnouncementForm from "../../components/AnnouncementForm/AnnouncementForm";

function CreateAnnounce() {
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>แก้ไขประกาศ</div>
      <AnnouncementForm type="create" />
    </div>
  );
}

export default CreateAnnounce;
