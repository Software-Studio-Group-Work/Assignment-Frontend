import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm({ type }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "create") {
      navigate("/");
    } else if (type === "edit") {
      navigate("/");
    }
  };

  return (
    <div>
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
                  <strong>หัวข้อกระทู้ธรรม</strong>
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

            <div
              className="container card"
              style={{ borderRadius: "10px", marginTop: "10px" }}
            >
              <div className="container form-group">
                <label style={{ marginTop: "10px" }}>
                  <strong>รายละเอียดกระทู้ธรรม</strong>
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
          style={{
            borderRadius: "10px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          <button type="submit" className="btn btn-success mb-2">
            สร้างกระทู้
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
