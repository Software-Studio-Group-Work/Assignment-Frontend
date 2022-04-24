import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddAnnouncement,
  useUpdateAnnouncement,
} from "../../hooks/useAnnouncement";
import { UserContext } from "../../contexts/UserContext";

function AnnouncementForm({ type, data }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const { mutate: addAnnouncement, isSuccess: isAddSuccess } =
    useAddAnnouncement();
  const { mutate: updateAnnouncement, isSuccess: isUpdateSuccess } =
    useUpdateAnnouncement();

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "create") {
      addAnnouncement({ adminId: user?.id, title, description });
    } else if (type === "edit") {
      updateAnnouncement({
        id: data?.id,
        adminId: data?.adminId,
        title,
        description,
      });
    }
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate("/");
    } else if (isAddSuccess) {
      navigate("/");
    }
  }, [isUpdateSuccess, isAddSuccess, navigate]);
  return (
    <form onSubmit={onSubmit}>
      <div
        className="container card"
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          backgroundColor: "#c9bc8e",
        }}
      >
        <div className="card-body">
          <div className="container card" style={{ borderRadius: "10px" }}>
            <div className="container form-group">
              <label style={{ marginTop: "10px" }}>
                <strong>ระบุสิ่งที่คุณต้องการประกาศ</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="question"
                aria-describedby=""
                placeholder=""
                style={{ backgroundColor: "#c4c4c4" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              ></input>
            </div>
          </div>

          <div
            className="container card"
            style={{ borderRadius: "10px", marginTop: "10px" }}
          >
            <div className="container form-group">
              <label style={{ marginTop: "10px" }}>
                <strong>เขียนรายละเอียดของประกาศ</strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                id="questionDetail"
                aria-describedby=""
                placeholder=""
                rows="10"
                style={{ backgroundColor: "#c4c4c4" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ borderRadius: "10px", marginTop: "10px" }}
      >
        <button type="submit" className="btn btn-success mb-2">
          {type === "create" ? "สร้างประกาศ" : "แก้ไขประกาศ"}
        </button>
      </div>
    </form>
  );
}

export default AnnouncementForm;
