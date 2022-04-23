import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAnnounce() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    navigate("/");
  };
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
              <label for="InputQuestion" style={{ marginTop: "10px" }}>
                <strong>1.ระบุสิ่งที่คุณต้องการประกาศ</strong>
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
              <label for="InputQuestionDetail" style={{ marginTop: "10px" }}>
                <strong>2.เขียนรายละเอียดของประกาศ</strong>
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
          สร้างประกาศ
        </button>
      </div>
    </form>
  );
}

export default CreateAnnounce;
