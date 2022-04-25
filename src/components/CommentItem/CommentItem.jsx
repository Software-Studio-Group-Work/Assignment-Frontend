import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillLike, AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  useGetLikeComment,
  useAddLikeComment,
  useDeleteLikeComment,
} from "../../hooks/useLikeComment";

function CommentItem({ comment, onDeleteComment, onEditClick, user }) {
  const { data: likes } = useGetLikeComment(comment?.id);
  const { mutate: addLikeComment } = useAddLikeComment();
  const { mutate: deleteLikeComment } = useDeleteLikeComment();
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (likes) {
      const like = likes.find((like) => like.userId === user.id);
      if (like) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    }
  }, [likes, user?.id]);

  const onLikeComment = () => {
    if (!user) {
      alert("กรุณาเข้าสู่ระบบก่อนเพื่อกดถูกใจ");
    } else {
      if (!isLike) {
        addLikeComment({
          commentId: comment?.id,
          userId: user.id,
        });
      } else {
        let like = likes.find((like) => like.userId === user.id);
        deleteLikeComment(like);
      }
    }
  };

  return (
    <CommentContainer key={comment.id}>
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
        <AiFillLike onClick={onLikeComment} color={isLike ? "#000" : "#fff"} />
        <span>{likes?.length}</span>
        <span>|</span>
        <span>สมาชิกหมายเลข: {comment.userId}</span>
      </FooterItem>
    </CommentContainer>
  );
}

export default CommentItem;

export const CommentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #c9bc8e;
  border-radius: 10px;
  padding: 15px;
  p {
    color: #fff;
  }
`;

export const FooterItem = styled.div`
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  column-gap: 20px;
  align-items: center;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
  svg:hover {
    color: #ffc107;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .icons {
    display: flex;
    column-gap: 14px;
    font-size: 1.2rem;
    svg {
      cursor: pointer;
    }
    svg:hover {
      color: #f8e076;
    }
  }
`;
