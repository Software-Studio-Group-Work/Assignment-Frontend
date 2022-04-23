import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
    } else {
      navigate("/login");
    }
  };

  return (
    <div id="register">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" id="register-from">
          <Form.Label id="title-register">สมัครสมาชิก</Form.Label>
          <br />
          <Form.Control
            type="user-id"
            placeholder="ชื่อผู้ใช้"
            className="input-register"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Form.Control
            type="password"
            placeholder="รหัสผ่าน"
            className="input-register"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Form.Control
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            className="input-register"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
        </Form.Group>
        <Button variant="primary" type="submit" id="button-register">
          Register
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
