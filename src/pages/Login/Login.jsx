import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useLogin } from "../../hooks/useAuth";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isLoading, isSuccess, isError } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ username, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      window.location.reload(false);
    }
  }, [isSuccess, navigate]);

  return (
    <div id="login">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" id="login-form">
          <Form.Label id="title-login">ลงชื่อเข้าใช้งาน</Form.Label>
          {isError && (
            <p style={{ color: "red" }}>ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง</p>
          )}
          <Form.Control
            type="email-user-id"
            placeholder="ชื่อผู้ใช้"
            className="input-login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Form.Control
            type="password"
            placeholder="รหัสผ่าน"
            className="input-login"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" id="button-login">
          {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </Button>
        <br />
        <Form.Label id="text-login">ยังไม่ได้เป็นสมาชิก</Form.Label>
        <span id="text-signup" onClick={() => navigate("/register")}>
          Sign Up
        </span>
      </Form>
    </div>
  );
}

export default Login;
