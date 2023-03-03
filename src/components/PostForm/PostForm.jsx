import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPost, useUpdatePost } from "../../hooks/usePost";
import { UserContext } from "../../contexts/UserContext";
import { Form } from "react-bootstrap";
import { ImageToBase64, ResizeImage } from "../../hooks/useImage";
import "./PostForm.css";
function PostForm({ type, data }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [picture, setPicture] = useState(data?.picture || "");
  const [religion, setReligion] = useState(data?.religion || "");
  const {
    mutate: addPost,
    data: post,
    isSuccess: isAddSuccess,
    isLoading: isAddLoading,
  } = useAddPost();
  const {
    mutate: updatePost,
    isSuccess: isUpdateSuccess,
    isLoading: isUpdateLoading,
  } = useUpdatePost();

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "create") {
      addPost({ userId: user.id, title, description, picture, religion });
    } else if (type === "edit") {
      updatePost({
        id: data?.id,
        userId: user.id,
        title,
        description,
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
      navigate(`/post/${data?.id}`);
    } else if (isAddSuccess) {
      navigate(`/post/${post.id}`);
    }
  }, [isUpdateSuccess, isAddSuccess, navigate, post, data]);

  return (
    <div className="post-form">
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
                  required
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
                {picture && <img alt="post" src={picture} />}
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
        <div style={{ borderRadius: "10px", marginTop: "10px" }}>
          <div className="container form-group">
            <button type="submit" className="btn btn-success mb-2">
              {(isUpdateLoading || isAddLoading) && "กำลัง"}
              {type === "create" ? "สร้างกระทู้ธรรม" : "แก้ไขกระทู้ธรรม"}
              {(isUpdateLoading || isAddLoading) && "..."}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
