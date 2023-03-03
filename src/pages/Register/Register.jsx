import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useRegister } from "../../hooks/useAuth";

function Register() {
  const { mutate, isLoading, isSuccess, isError } = useRegister();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [religion, setReligion] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
    } else {
      mutate({ username, name, password, religion });
    }
  };
  useEffect(() => {
    if (isSuccess) {
      alert("สมัครสมาชิกสำเร็จ");
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  return (
    <div id="register">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" id="register-from">
          <Form.Label id="title-register">สมัครสมาชิก</Form.Label>
          {isError && (
            <span style={{ color: "red" }}>
              มีบางอย่างผิดพลาดกรุณาลองอีกครั้ง
            </span>
          )}
          <br />
          <Form.Label className="text-input">ชื่อผู้ใช้</Form.Label>
          <Form.Control
            type="user-id"
            placeholder="ชื่อผู้ใช้"
            className="input-register"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Form.Label className="text-input">ชื่อ</Form.Label>
          <Form.Control
            type="text"
            placeholder="ชื่อ"
            className="input-register"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Label className="text-input">ศาสนา</Form.Label>
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
                required
              />
              <Form.Check
                inline
                label="อิสลาม"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                onChange={() => setReligion("islam")}
                checked={religion === "islam"}
              />
              <Form.Check
                inline
                label="คริสต์"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
                onChange={() => setReligion("christ")}
                checked={religion === "christ"}
              />
              <Form.Check
                inline
                label="อื่นๆ"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
                onChange={() => setReligion("other")}
                checked={religion === "other"}
              />
            </div>
          ))}
          <Form.Label className="text-input">รหัสผ่าน</Form.Label>
          <Form.Control
            type="password"
            placeholder="รหัสผ่าน"
            className="input-register"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Label className="text-input">ยืนยันรหัสผ่าน</Form.Label>
          <Form.Control
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            className="input-register"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" id="button-register">
          {isLoading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
        </Button>
        <br />
        <Form.Label id="text-register">ยังไม่ได้เป็นสมาชิก</Form.Label>
        <span onClick={() => navigate("/login")} id="text-signin">
          Sign In
        </span>
      </Form>
    </div>
  );
}

export default Register;
