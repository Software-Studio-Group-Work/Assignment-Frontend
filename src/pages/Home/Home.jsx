import React, { useContext } from "react";
import { HomeContainer, HomeItem } from "./Home.styles";
import PostItem from "../../components/PostItem/PostItem";
import { ReligionContext } from "../../contexts/ReligionContext";
import {
  useGetAnnouncements,
  useDeleteAnnouncement,
} from "../../hooks/useAnnouncement";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { religion } = useContext(ReligionContext);
  const { data: announcements } = useGetAnnouncements();
  const { mutate: deleteAnnouncement } = useDeleteAnnouncement();

  const onAnnouncementDelete = (id) => {
    deleteAnnouncement(id);
  };

  const posts = [
    {
      id: "1",
      userId: "1",
      title: "สิบปากว่า",
      description:
        "นิทานเรื่องนี้ พระอาจารย์พรหม เล่าไว้ในชวนม่วนชื่น ธรรมะบันเทิงหลายเรื่องเล่า เล่มแรก ท่านขึ้นต้นเหมือนนิทานทั่วไป ต่างกันที่ท่านขึ้นต้นว่า ครั้งหนึ่งเมื่อหลายศตวรรษที่แล้ว ในบ้านเมืองหนึ่งซึ่งปกครองด้วยระบอบราชาธิปไตย พระราชาเป็นใหญ่ แต่พระราชาพระองค์นี้ทรงเป็นคนหนุ่ม มีสติปัญญา ทุกปัญหาในบ้านเมือง ทรงเอาเข้าที่ประชุมคณะเสนาบดี ใช้เสียงส่วนใหญ่ตัดสิน",
      religion: "buddhist",
      isHide: false,
    },
    {
      id: "2",
      userId: "1",
      title: "นกน้อยในกรง",
      description:
        "เทศนาแต่ละกัณฑ์ของพระอาจารย์พรหม พระฝรั่ง สมภารวัดพุทธในเมืองเพิร์ธ ออสเตรเลีย เป็นเรื่องเล่าง่ายๆ หลายกัณฑ์ฟังท่านจบก็ต้องมีรอยยิ้ม คุณแม่ฝรั่งยังสาวชาวพุทธหาเวลาเล่าเรื่องลูกชายวัยหกขวบให้ท่านฟัง...วันนั้นเขามีเรื่องโกรธแม่มาก เขาประกาศเสียงกร้าว “แม่ครับ ผมไม่รักแม่อีกแล้ว ผมกำลังจะไปจากบ้านนี้”",
      religion: "islam",
      isHide: false,
    },
    {
      id: "3",
      userId: "2",
      title: "พระโพธิสัตว์เดินดิน",
      description:
        "บทที่ 20 ในชุบชูใจในยามวิกฤติ หนังสือเล่มล่าของพระเมธีวชิโรดม (ว.วชิรเมธี) โลกต้องการพระโพธิสัตว์เดินดิน... ใครอยากรู้พระโพธิสัตว์เดินดินมีจริงหรือ ถ้ามีท่านเดินอยู่ที่ไหน ควรอ่าน",
      religion: "christ",
      isHide: false,
    },
    {
      id: "4",
      userId: "2",
      title: "นกน้อยในกรง",
      description:
        "เทศนาแต่ละกัณฑ์ของพระอาจารย์พรหม พระฝรั่ง สมภารวัดพุทธในเมืองเพิร์ธ ออสเตรเลีย เป็นเรื่องเล่าง่ายๆ หลายกัณฑ์ฟังท่านจบก็ต้องมีรอยยิ้ม คุณแม่ฝรั่งยังสาวชาวพุทธหาเวลาเล่าเรื่องลูกชายวัยหกขวบให้ท่านฟัง...วันนั้นเขามีเรื่องโกรธแม่มาก เขาประกาศเสียงกร้าว “แม่ครับ ผมไม่รักแม่อีกแล้ว ผมกำลังจะไปจากบ้านนี้”",
      religion: "other",
      isHide: false,
    },
  ];
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
          {posts.map((post, index) => {
            return (
              <div key={post.id}>
                <PostItem
                  bg={index % 2 === 0 ? "#fff" : "#c4c4c4"}
                  item={post}
                  role={user?.role}
                  userId={user?.id}
                  type="post"
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
