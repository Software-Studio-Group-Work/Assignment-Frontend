import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateLandmark() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, link, image);
    navigate("/");
  };
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>
        เพิ่มสถานที่สำคัญ
      </div>
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
                <input
                  type="file"
                  className="form-control"
                  style={{ border: "none" }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ borderRadius: "10px", marginTop: "10px" }}
        >
          <button type="submit" className="btn btn-success mb-2">
            เพิ่มสถานที่สำคัญ
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateLandmark;
