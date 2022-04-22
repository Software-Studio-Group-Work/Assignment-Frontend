import React from "react";
import { useParams } from "react-router-dom";
import {
  PostContainer,
  PostItem,
  CommentItem,
  FooterItem,
} from "./Post.styles";

import { AiFillLike } from "react-icons/ai";

function Post() {
  const { id } = useParams();
  return (
    <PostContainer>
      <PostItem>
        <h4>รีวิวหนังสือเล่มที่ {id}</h4>
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
        <p>Lorem ipsum dolor sit amet.</p>
        <FooterItem>
          <AiFillLike />
          <span>|</span>
          <span>User</span>
        </FooterItem>
      </CommentItem>
      <CommentItem>
        <p>Lorem ipsum dolor sit amet.</p>
        <FooterItem>
          <AiFillLike />
          <span>|</span>
          <span>User</span>
        </FooterItem>
      </CommentItem>
      <CommentItem>
        <p>Lorem ipsum dolor sit amet.</p>
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
