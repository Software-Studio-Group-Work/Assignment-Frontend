import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PostContainer,
  PostItem,
  CommentItem,
  FooterItem,
  Header,
} from "./Post.styles";
import { AiFillDelete } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useGetPost } from "../../hooks/usePost";
import { UserContext } from "../../contexts/UserContext";
import { useDeletePost, useUpdatePost } from "../../hooks/usePost";
function Post() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPost(id);
  const { mutate: deletePost } = useDeletePost();
  const { mutate: updatePost } = useUpdatePost();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (data?.isHide) return <h2>กระทู้นี้ถูกซ่อนแล้ว</h2>;

  const onDelete = () => {
    if (window.confirm("คุณต้องการลบกระทู้นี้หรือไม่?")) {
      deletePost(id);
      navigate("/");
    }
  };

  const onHide = () => {
    if (window.confirm("คุณต้องการซ่อนกระทู้นี้หรือไม่?")) {
      let newItem = { ...data };
      newItem.isHide = true;
      updatePost(newItem);
      navigate("/");
    }
  };

  return (
    <PostContainer>
      <PostItem>
        <Header>
          <h4>{data?.title}</h4>
          {user && user.id === data?.userId && (
            <div className="icons">
              <BiHide onClick={onHide} />
              <AiFillEdit onClick={() => navigate(`/edit-post/${id}`)} />
              <AiFillDelete onClick={onDelete} />
            </div>
          )}
          {user && user.id !== data?.userId && user.role === "admin" && (
            <div className="icons">
              <BiHide onClick={onHide} />
              <AiFillDelete onClick={onDelete} />
            </div>
          )}
        </Header>
        {data?.picture && <img alt="post" src={data?.picture} />}

        <p>{data?.description}</p>
        <FooterItem>
          <AiFillLike />
          <span>|</span>
          <span>สมาชิกหมายเลข: {data?.userId}</span>
        </FooterItem>
      </PostItem>
      <CommentItem>
        <Header>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="icons">
            <BiHide />
            <AiFillEdit />
            <AiFillDelete />
          </div>
        </Header>
        <FooterItem>
          <AiFillLike />
          <span>|</span>
          <span>สมาชิกหมายเลข: User</span>
        </FooterItem>
      </CommentItem>
    </PostContainer>
  );
}

export default Post;
