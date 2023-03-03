import React from "react";
import PostForm from "../../components/PostForm/PostForm";

function CreatePost() {
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>
        สร้างกระทู้ธรรม
      </div>
      <PostForm type="create" />
    </div>
  );
}

export default CreatePost;
