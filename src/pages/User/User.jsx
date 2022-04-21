import React from "react";
import { Form, Button } from "react-bootstrap";
import "./User.css";
function User() {
  return (
    <div id="user">
      <div id="upload">
        <div id="circle"></div>
        <p id="text-upload">Upload a different photo...</p>
        <div id="upload-image">
          <Button variant="primary" type="submit" id="button-upload">
            Choose file
          </Button>
        </div>
      </div>
      <div id="personal-user">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label id="title-user">Personal info</Form.Label>
            <br />
            <Form.Label id="text-user">First name : </Form.Label>
            <Form.Control type="first-name" id="input-user" />
            <br />
            <Form.Label id="text-user">Last name : </Form.Label>
            <Form.Control type="last-name" id="input-user" />
            <br />
            <Form.Label id="text-user">Company : </Form.Label>
            <Form.Control type="company" id="input-user" />
            <br />
            <Form.Label id="text-user">Email : </Form.Label>
            <Form.Control type="email" id="input-user" />
          </Form.Group>
          <Button variant="primary" type="submit" id="button-user">
            Apply
          </Button>
          <br />
        </Form>
      </div>
    </div>
  );
}

export default User;
