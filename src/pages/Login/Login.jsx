import React from "react";
import { Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function Login() {

   const navigate = useNavigate();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ลงชื่อเข้าใช้งาน</Form.Label><br/>
        <Form.Control  type="email-user-id" placeholder="อีเมล/ชื่อผู้ใช้"  /><br/>
        <Form.Control  type="password" placeholder="รหัสผ่าน" />
      </Form.Group>
      <Button variant="primary" type="submit">
    Login
  </Button><br/>
  <Form.Label>ยังไม่ได้เป็นสมาชิก</Form.Label>
  <span onClick={()=>navigate("/register")} >SignUpก</span>
    </Form>
  );
}

export default Login;
