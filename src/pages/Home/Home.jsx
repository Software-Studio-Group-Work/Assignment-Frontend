import React from "react";
import { HomeContainer, HomeItem } from "./Home.styles";
import PostItem from "../../components/PostItem/PostItem";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const lists = Array(10).fill(0);
  return (
    <HomeContainer>
      <HomeItem>
        <div className="item-header">Announce</div>
        <div className="item-content">
          {lists.map((item, index) => {
            if (index < 2) {
              return (
                <PostItem
                  key={index}
                  bg={index % 2 === 0 ? "#fff" : "#c4c4c4"}
                />
              );
            }
            return null;
          })}
        </div>
      </HomeItem>
      <HomeItem>
        <div className="item-header">กระทู้ธรรม</div>
        <div className="item-content">
          {lists.map((item, index) => {
            return (
              <div key={index} onClick={() => navigate(`/post/${index}`)}>
                <PostItem bg={index % 2 === 0 ? "#fff" : "#c4c4c4"} />
              </div>
            );
          })}
        </div>
      </HomeItem>
    </HomeContainer>
  );
}

export default Home;
