import React, { useContext } from "react";
import { HomeContainer, HomeItem } from "./Home.styles";
import PostItem from "../../components/PostItem/PostItem";
import {
  useGetAnnouncements,
  useDeleteAnnouncement,
} from "../../hooks/useAnnouncement";
import {
  useGetPostsByReligion,
  useDeletePost,
  useUpdatePost,
} from "../../hooks/usePost";
import { UserContext } from "../../contexts/UserContext";
import { ReligionContext } from "../../contexts/ReligionContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { religion } = useContext(ReligionContext);
  const { data: announcements } = useGetAnnouncements();
  const { mutate: deleteAnnouncement } = useDeleteAnnouncement();
  const { data: posts } = useGetPostsByReligion(religion);
  const { mutate: deletePost } = useDeletePost(religion);
  const { mutate: updatePost } = useUpdatePost(religion);

  const onAnnouncementDelete = (id) => {
    if (window.confirm("คุณต้องการลบประกาศนี้หรือไม่?")) {
      deleteAnnouncement(id);
    }
  };

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

  return (
    <HomeContainer>
      <HomeItem>
        <div className="item-header">Announcement</div>
        <div
          className="item-content"
          style={
            announcements?.length % 2 === 0
              ? { backgroundColor: "#c4c4c4" }
              : { backgroundColor: "#fff" }
          }
        >
          {announcements?.map((announcement, index) => {
            return (
              <div key={announcement.id}>
                <PostItem
                  bg={index % 2 === 0 ? "#fff" : "#c4c4c4"}
                  item={announcement}
                  role={user?.role}
                  userId={user?.id}
                  type="announcement"
                  onDelete={() => onAnnouncementDelete(announcement.id)}
                  onEdit={() => navigate(`/edit-announce/${announcement.id}`)}
                />
              </div>
            );
          })}
        </div>
      </HomeItem>
      <HomeItem>
        <div className="item-header">กระทู้ธรรม</div>
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
                    onEdit={() => navigate(`/edit-post/${post.id}`)}
                    onHide={() => onHide(post)}
                  />
                </div>
              );
            })}
        </div>
      </HomeItem>
    </HomeContainer>
  );
}

export default Home;
