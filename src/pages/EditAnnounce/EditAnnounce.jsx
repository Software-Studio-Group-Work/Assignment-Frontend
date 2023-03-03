import React from "react";
import { useParams } from "react-router-dom";
import AnnouncementForm from "../../components/AnnouncementForm/AnnouncementForm";
import { useGetAnnouncement } from "../../hooks/useAnnouncement";
function EditAnnounce() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetAnnouncement(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>แก้ไขประกาศ</div>
      <AnnouncementForm type="edit" data={data} />
    </div>
  );
}

export default EditAnnounce;
