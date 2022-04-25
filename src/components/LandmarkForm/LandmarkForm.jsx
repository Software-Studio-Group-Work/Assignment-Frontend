import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useAddPlace, useUpdatePlace } from "../../hooks/usePlace";
import { Form } from "react-bootstrap";
import { ImageToBase64, ResizeImage } from "../../hooks/useImage";
import "./LandmarkForm.css";
function LandmarkForm({ type, data }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [link, setLink] = useState(data?.link || "");
  const [picture, setPicture] = useState(data?.picture || "");
  const [religion, setReligion] = useState(data?.religion || "");

  const {
    mutate: addPlace,
    isSuccess: isAddSuccess,
    isLoading: isAddLoading,
  } = useAddPlace();
  const {
    mutate: updatePlace,
    isSuccess: isUpdateSuccess,
    isLoading: isUpdateLoading,
  } = useUpdatePlace();

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "create") {
      addPlace({
        adminId: user?.id,
        title,
        description,
        link,
        picture,
        religion,
      });
    } else if (type === "edit") {
      updatePlace({
        id: data?.id,
        adminId: data?.adminId,
        title,
        description,
        link,
        picture,
        religion,
      });
    }
  };

  const uploadImage = async (e) => {
    const image = e.target.files[0];
    const base64 = await ImageToBase64(image);
    const resized = await ResizeImage(base64, 300, 300);
    setPicture(resized);
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate("/landmarks");
    } else if (isAddSuccess) {
      navigate("/landmarks");
    }
  }, [isUpdateSuccess, isAddSuccess, navigate]);
  return (
    <div className="landmark-form">
      <hr />
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
                  <strong>ระบุชื่อสถานที่สำคัญ</strong>
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
                ></input>
              </div>
            </div>

            <div
              className="container card"
              style={{ borderRadius: "10px", marginTop: "10px" }}
            >
              <div className="container form-group">
                <label style={{ marginTop: "10px" }}>
                  <strong>เขียนรายละเอียดสถานที่สำคัญ</strong>
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

            <div
              className="container card"
              style={{ borderRadius: "10px", marginTop: "10px" }}
            >
              <div className="container form-group">
                <label style={{ marginTop: "10px" }}>
                  <strong>ระบุลิงค์สถานที่สำคัญ</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="question"
                  aria-describedby=""
                  placeholder=""
                  style={{ backgroundColor: "#c4c4c4" }}
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                ></input>
              </div>
            </div>

            <div
              className="container card"
              style={{ borderRadius: "10px", marginTop: "10px" }}
            >
              <div
                className="container form-group"
                style={{ marginTop: "10px" }}
              >
                <label>
                  <strong>รูปภาพ</strong>
                </label>
                {picture && <img alt="place" src={picture} />}
                <input
                  type="file"
                  className="form-control"
                  style={{ border: "none" }}
                  onChange={uploadImage}
                ></input>
              </div>
            </div>

            <div
              className="container card"
              style={{ borderRadius: "10px", marginTop: "10px" }}
            >
              <div className="container form-group">
                <label style={{ marginTop: "10px" }}>
                  <strong>ศาสนา</strong>
                </label>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="พุทธ"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={() => setReligion("buddhist")}
                      checked={religion === "buddhist"}
                      required
                    />
                    <Form.Check
                      inline
                      label="อิสลาม"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={() => setReligion("islam")}
                      checked={religion === "islam"}
                    />
                    <Form.Check
                      inline
                      label="คริสต์"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={() => setReligion("christ")}
                      checked={religion === "christ"}
                    />
                    <Form.Check
                      inline
                      label="อื่นๆ"
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={() => setReligion("other")}
                      checked={religion === "other"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ borderRadius: "10px", marginTop: "10px" }}
        >
          <button type="submit" className="btn btn-success mb-2">
            {(isUpdateLoading || isAddLoading) && "กำลัง"}
            {type === "create" ? "เพิ่มสถานที่สำคัญ" : "แก้ไขสถานที่สำคัญ"}
            {(isUpdateLoading || isAddLoading) && "..."}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LandmarkForm;
