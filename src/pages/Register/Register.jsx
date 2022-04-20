import React from 'react'
import { Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function Register() {

    const navigate = useNavigate();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>สมัครสมาชิก</Form.Label><br/>
        <Form.Control  type="user-id" placeholder="ชื่อผู้ใช้"  /><br/>
        <Form.Control  type="email" placeholder="อีเมล"  /><br/>
        <Form.Control  type="password" placeholder="รหัสผ่าน" /><br/>
        <Form.Control  type="confirm" placeholder="ยืนยันรหัสผ่าน"  /><br/>
      </Form.Group>
      <Button variant="primary" type="submit">
    Login
  </Button><br/>
  <Form.Label>ยังไม่ได้เป็นสมาชิก</Form.Label>
  <span onClick={()=>navigate("/login")} >Sign In</span>
    </Form>
  )
}

export default Register