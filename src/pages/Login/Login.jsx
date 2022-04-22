import React from "react";
import { Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './Login.css';
function Login() {

   const navigate = useNavigate();

  return (
    <div id="login">
    <Form>
      <Form.Group className="mb-3" id ="login-form">
        <Form.Label id='title-login'>ลงชื่อเข้าใช้งาน</Form.Label><br/>
        <Form.Control  type="email-user-id" placeholder="อีเมล/ชื่อผู้ใช้" id="input-login"  /><br/>
        <Form.Control  type="password" placeholder="รหัสผ่าน" id="input-login" />
      </Form.Group>
      <Button variant="primary" type="submit" id="button-login">
    Login
  </Button><br/>
  <Form.Label id='text-login'>ยังไม่ได้เป็นสมาชิก</Form.Label>
  <span id='text-signup' onClick={()=>navigate("/register")} >Sign Up</span>
    </Form>
    </div>
  );
}

export default Login;
