import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./User.css";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUser, useUpdateUser, useDeleteUser } from "../../hooks/useUser";
import { UserContext } from "../../contexts/UserContext";

function User() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { data, isLoading, isError } = useGetUser(id);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [religion, setReligion] = useState(null);
  const [picture, setPicture] = useState("");
  const { mutate: updateUser, isSuccess: isUpdateSuccess } = useUpdateUser();
  const { mutate: deleteUser, isSuccess: isDeleteSuccess } = useDeleteUser();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setReligion(data.religion);
      setPicture(data.picture);
    }
  }, [data]);

  useEffect(() => {
    if (isUpdateSuccess) {
      setIsEdit(false);
      window.location.reload(false);
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isDeleteSuccess) {
      navigate("/");
    }
  }, [isDeleteSuccess, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateUser({ ...user, religion, name, picture });
    } else {
      setIsEdit(true);
    }
  };

  const onDeleteClick = () => {
    if (window.confirm("คุณต้องการลบบัญชีนี้หรือไม่?")) {
      deleteUser(data?.id);
    }
  };

  const onBanClick = () => {
    if (window.confirm("คุณต้องการระงับบัญชีนี้หรือไม่?")) {
      updateUser({ ...data, isBan: true });
    }
  };

  const onUnBanClick = () => {
    if (window.confirm("คุณต้องการปลดระงับบัญชีนี้หรือไม่?")) {
      updateUser({ ...data, isBan: false });
    }
  };

  if (data?.isBan && user?.role !== "admin") {
    return <h1>ถูกระงับการใช้งาน</h1>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <div id="user">
      <div id="upload">
        <div id="circle"></div>
        {isEdit && (
          <div id="upload-image">
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </div>
        )}
      </div>
      <div id="personal-user">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" id="personal-from">
            <Form.Label id="title-user">Personal info</Form.Label>
            <br />
            <Form.Label id="text-user">Name : </Form.Label>
            <Form.Control
              type="first-name"
              id="input-user"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEdit}
            />
            <br />
            <Form.Label id="text-user">Religion : </Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="พุทธ"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={() => setReligion("buddhist")}
                  checked={religion === "buddhist"}
                  disabled={!isEdit}
                />
                <Form.Check
                  inline
                  label="อิสลาม"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={() => setReligion("islam")}
                  checked={religion === "islam"}
                  disabled={!isEdit}
                />
                <Form.Check
                  inline
                  label="คริสต์"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={() => setReligion("christ")}
                  checked={religion === "christ"}
                  disabled={!isEdit}
                />
                <Form.Check
                  inline
                  label="อื่นๆ"
                  name="group1"
                  type={type}
                  id={`inline-${type}-4`}
                  onChange={() => setReligion("other")}
                  checked={religion === "other"}
                  disabled={!isEdit}
                />
              </div>
            ))}
          </Form.Group>
          {data?.id === user?.id && (
            <>
              <Button variant="primary" type="submit" className="button-user">
                {isEdit ? "บันทึก" : "แก้ไข"}
              </Button>
              <Button
                variant="danger"
                className="button-user"
                onClick={onDeleteClick}
              >
                ยกเลิกสมาชิก
              </Button>
            </>
          )}
          {user?.role === "admin" && user?.id !== data?.id && !data?.isBan && (
            <Button
              variant="danger"
              className="button-user"
              onClick={onBanClick}
            >
              ระงับการใช้งาน
            </Button>
          )}

          {user?.role === "admin" && user?.id !== data?.id && data?.isBan && (
            <Button
              variant="primary"
              className="button-user"
              onClick={onUnBanClick}
            >
              ยกเลิกการระงับการใช้งาน
            </Button>
          )}

          <br />
        </Form>
      </div>
    </div>
  );
}

export default User;
