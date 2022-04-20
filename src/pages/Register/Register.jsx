import React from 'react'
import { Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./Register.css"
function Register() {

    const navigate = useNavigate();
  return (
      <div id="register">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="title-register">สมัครสมาชิก</Form.Label><br/>
        <Form.Control  type="user-id" placeholder="ชื่อผู้ใช้" id="input-register" /><br/>
        <Form.Control  type="email" placeholder="อีเมล"  id="input-register"/><br/>
        <Form.Control  type="password" placeholder="รหัสผ่าน" id="input-register"/><br/>
        <Form.Control  type="confirm" placeholder="ยืนยันรหัสผ่าน" id="input-register" /><br/>
      </Form.Group>
      <Button variant="primary" type="submit" id="button-register">
      Register
  </Button><br/>
  <Form.Label  id="text-register" >ยังไม่ได้เป็นสมาชิก</Form.Label>
  <span onClick={()=>navigate("/login")} id="text-signin">Sign In</span>
    </Form>

    </div>
  )
}

export default Register