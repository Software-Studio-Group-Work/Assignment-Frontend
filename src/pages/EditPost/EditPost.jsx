import React from "react";
import PostForm from "../../components/PostForm/PostForm";

function EditPost() {
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>
        แก้ไขกระทู้ธรรม
      </div>
      <PostForm type="create" />
    </div>
  );
}

export default EditPost;
