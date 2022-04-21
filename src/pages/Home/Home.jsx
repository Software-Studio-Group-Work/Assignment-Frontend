import React from "react";
import { HomeContainer, HomeItem } from "./Home.styles";
import PostItem from "../../components/PostItem/PostItem";

function Home() {
  const lists = Array.from({ length: 10 }, (_, index) => index);
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
          })}
        </div>
      </HomeItem>
      <HomeItem>
        <div className="item-header">กระทู้ธรรม</div>
        <div className="item-content">
          {lists.map((item, index) => {
            return (
              <PostItem key={index} bg={index % 2 === 0 ? "#fff" : "#c4c4c4"} />
            );
          })}
        </div>
      </HomeItem>
    </HomeContainer>
  );
}

export default Home;
