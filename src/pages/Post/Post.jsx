import React from "react";
import { useParams } from "react-router-dom";
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

function Post() {
  const { id } = useParams();

  return (
    <PostContainer>
      <PostItem>
        <Header>
          <h4>รีวิวหนังสือเล่มที่ {id}</h4>
          <div className="icons">
            <BiHide />
            <AiFillEdit />
            <AiFillDelete />
          </div>
        </Header>
        <img alt="post" src="https://inwfile.com/s-fq/zp2qee.jpg" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
          blanditiis. Voluptates asperiores dicta, perferendis exercitationem
          tenetur perspiciatis id repellendus voluptas!
        </p>
        <FooterItem>
          <AiFillLike />
          <span>|</span>
          <span>User</span>
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
          <span>User</span>
        </FooterItem>
      </CommentItem>
    </PostContainer>
  );
}

export default Post;
