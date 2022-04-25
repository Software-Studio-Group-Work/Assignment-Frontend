import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PostContainer,
  PostItem,
  CommentItem,
  FooterItem,
  Header,
  CommentForm,
} from "./Post.styles";
import { AiFillDelete } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useGetPost } from "../../hooks/usePost";
import { UserContext } from "../../contexts/UserContext";
import { useDeletePost, useUpdatePost } from "../../hooks/usePost";
import { Button } from "react-bootstrap";
import {
  useGetCommentsByPostId,
  useAddComment,
  useUpdateComment,
  useDeleteComment,
} from "../../hooks/useComment";
function Post() {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [commentEdit, setCommentEdit] = useState(null);
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPost(id);
  const { data: comments } = useGetCommentsByPostId(id);
  const { mutate: deletePost } = useDeletePost();
  const { mutate: updatePost } = useUpdatePost();
  const { mutate: addComment } = useAddComment();
  const { mutate: updateComment } = useUpdateComment();
  const { mutate: deleteComment } = useDeleteComment();
  const [isEditComment, setIsEditComment] = useState(false);

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

  const onSubmitComment = (e) => {
    e.preventDefault();
    if (isEditComment) {
      if (comment.trim() === "") return;
      let newComment = {
        ...commentEdit,
        comment: comment,
      };
      updateComment(newComment);
    } else {
      if (comment.trim() === "") return;
      let newComment = {
        postId: id,
        userId: user.id,
        comment,
      };
      addComment(newComment);
    }
    setComment("");
    setIsEditComment(false);
  };

  const onEditClick = (comment) => {
    setIsEditComment(true);
    setCommentEdit(comment);
    setComment(comment.comment);
  };

  const onDeleteComment = (comment) => {
    if (window.confirm("คุณต้องการลบความคิดเห็นนี้หรือไม่?")) {
      deleteComment(comment);
    }
  };

  const onCancelCommentClick = () => {
    setIsEditComment(false);
    setComment("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (data?.isHide) return <h2>กระทู้นี้ถูกซ่อนแล้ว</h2>;

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
      {comments?.map((comment) => (
        <CommentItem key={comment.id}>
          <Header>
            <p>{comment.comment}</p>
            {user && comment.userId !== user?.id && user?.role === "admin" && (
              <div className="icons">
                <AiFillDelete onClick={() => onDeleteComment(comment)} />
              </div>
            )}

            {user && comment.userId === user?.id && (
              <div className="icons">
                <AiFillEdit onClick={() => onEditClick(comment)} />
                <AiFillDelete onClick={() => onDeleteComment(comment)} />
              </div>
            )}
          </Header>
          <FooterItem>
            <AiFillLike />
            <span>|</span>
            <span>สมาชิกหมายเลข: {comment.userId}</span>
          </FooterItem>
        </CommentItem>
      ))}

      <CommentForm onSubmit={onSubmitComment}>
        <label style={{ marginTop: "10px" }}>
          <strong>แสดงความคิดเห็น</strong>
        </label>
        <textarea
          type="text"
          className="form-control"
          id="questionDetail"
          aria-describedby=""
          placeholder=""
          rows="2"
          style={{ backgroundColor: "#c4c4c4" }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <Button variant="warning" type="submit">
            {isEditComment ? "บันทึก" : "แสดงความคิดเห็น"}
          </Button>
          {isEditComment && (
            <Button variant="danger" onClick={onCancelCommentClick}>
              ยกเลิก
            </Button>
          )}
        </div>
      </CommentForm>
    </PostContainer>
  );
}

export default Post;
