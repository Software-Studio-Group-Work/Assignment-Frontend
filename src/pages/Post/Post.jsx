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

function Post() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPost(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <PostContainer>
      <PostItem>
        <Header>
          <h4>{data?.title}</h4>
          {user && user.id === data?.userId && (
            <div className="icons">
              <BiHide />
              <AiFillEdit onClick={() => navigate(`/edit-post/${id}`)} />
              <AiFillDelete />
            </div>
          )}
          {user && user.id !== data?.userId && user.role === "admin" && (
            <div className="icons">
              <BiHide />
              <AiFillDelete />
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
