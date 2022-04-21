import React from "react";
import { PostItemContainer } from "./PostItem.styles";

function PostItem({ bg }) {
  return (
    <PostItemContainer bg={bg}>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
        accusantium corrupti repellendus minima assumenda.
      </p>
    </PostItemContainer>
  );
}

export default PostItem;
