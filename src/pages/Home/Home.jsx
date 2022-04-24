import React, { useContext } from "react";
import { HomeContainer, HomeItem } from "./Home.styles";
import PostItem from "../../components/PostItem/PostItem";
import {
  useGetAnnouncements,
  useDeleteAnnouncement,
} from "../../hooks/useAnnouncement";
import { useGetPosts, useDeletePost } from "../../hooks/usePost";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { data: announcements } = useGetAnnouncements();
  const { mutate: deleteAnnouncement } = useDeleteAnnouncement();
  const { data: posts } = useGetPosts();
  const { mutate: deletePost } = useDeletePost();

  const onAnnouncementDelete = (id) => {
    deleteAnnouncement(id);
  };

  const onPostDelete = (id) => {
    deletePost(id);
  };

  return (
    <HomeContainer>
      <HomeItem>
        <div className="item-header">Announcement</div>
        <div className="item-content">
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
        <div className="item-content">
          {posts?.map((post, index) => {
            return (
              <div key={post.id}>
                <PostItem
                  bg={index % 2 === 0 ? "#fff" : "#c4c4c4"}
                  item={post}
                  role={user?.role}
                  userId={user?.id}
                  type="post"
                  onDelete={() => onPostDelete(post.id)}
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

export default Home;
