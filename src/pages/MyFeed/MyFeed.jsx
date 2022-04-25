import React, { useContext } from "react";
import {
  useGetPostsByUser,
  useDeletePost,
  useUpdatePost,
} from "../../hooks/usePost";
import { UserContext } from "../../contexts/UserContext";
import { HomeContainer, HomeItem } from "../Home/Home.styles";
import PostItem from "../../components/PostItem/PostItem";
import { useNavigate } from "react-router-dom";
function MyFeed() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { data: posts, isLoading, isError } = useGetPostsByUser(user?.id);
  const { mutate: deletePost } = useDeletePost();
  const { mutate: updatePost } = useUpdatePost();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const onPostDelete = (post) => {
    if (window.confirm("คุณต้องการลบกระทู้นี้หรือไม่?")) {
      deletePost(post);
    }
  };

  const onHide = (item) => {
    if (window.confirm("คุณต้องการซ่อนกระทู้นี้หรือไม่?")) {
      let newItem = { ...item };
      newItem.isHide = true;
      updatePost(newItem);
    }
  };

  const onShow = (item) => {
    if (window.confirm("คุณต้องการยกเลิกการซ่อนกระทู้นี้หรือไม่?")) {
      let newItem = { ...item };
      newItem.isHide = false;
      updatePost(newItem);
    }
  };

  return (
    <HomeContainer>
      <HomeItem>
        <div className="item-header">กระทู้ธรรมของฉัน</div>
        <div
          className="item-content"
          style={
            posts?.filter((post) => {
              return post.isHide === false;
            }).length %
              2 ===
            0
              ? { backgroundColor: "#c4c4c4" }
              : { backgroundColor: "#fff" }
          }
        >
          {posts
            ?.filter((post) => {
              return post.isHide === false;
            })
            .map((post, index) => {
              return (
                <div key={post.id}>
                  <PostItem
                    bg={index % 2 === 0 ? "#fff" : "#c4c4c4"}
                    item={post}
                    role={user?.role}
                    userId={user?.id}
                    type="post"
                    onDelete={() => onPostDelete(post)}
                    onHide={() => onHide(post)}
                    onEdit={() => navigate(`/edit-post/${post.id}`)}
                  />
                </div>
              );
            })}
        </div>
      </HomeItem>
      <HomeItem>
        <div className="item-header">กระทู้ธรรมของฉันที่ซ่อนไว้</div>
        <div
          className="item-content"
          style={
            posts?.filter((post) => {
              return post.isHide === true;
            }).length %
              2 ===
            0
              ? { backgroundColor: "#c4c4c4" }
              : { backgroundColor: "#fff" }
          }
        >
          {posts
            ?.filter((post) => {
              return post.isHide === true;
            })
            .map((post, index) => {
              return (
                <div key={post.id}>
                  <PostItem
                    bg={index % 2 === 0 ? "#fff" : "#c4c4c4"}
                    item={post}
                    role={user?.role}
                    userId={user?.id}
                    type="post"
                    onDelete={() => onPostDelete(post)}
                    onShow={() => onShow(post)}
                    onEdit={() => navigate(`/edit-post/${post.id}`)}
                  />
                </div>
              );
            })}
        </div>
      </HomeItem>
    </HomeContainer>
  );
}

export default MyFeed;
