import React, { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {useAddAnnouncement} from "../../hooks/useAnnouncement";
import { UserContext } from "../../contexts/UserContext";

function CreateAnnounce() {
  const { user} = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutate, isLoading, isSuccess, isError } = useAddAnnouncement();
  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ adminId:user.id,title, description });
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>สร้างประกาศ{isError&&<p>error</p>}</div>
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
          <button type="submit" className="btn btn-success mb-2" >
            {isLoading?"กำลังสร้างประกาศ..." : "สร้างประกาศ"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAnnounce;
