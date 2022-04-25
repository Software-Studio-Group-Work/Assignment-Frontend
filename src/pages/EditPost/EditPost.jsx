import React from "react";
import PostForm from "../../components/PostForm/PostForm";
import { useGetPost } from "../../hooks/usePost";
import { useParams } from "react-router-dom";
function EditPost() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPost(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div>
      <div style={{ fontSize: "35px", fontWeight: "bold" }}>
        แก้ไขกระทู้ธรรม
      </div>
      <PostForm type="edit" data={data} />
    </div>
  );
}

export default EditPost;
