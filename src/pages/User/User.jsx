import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import "./User.css";

function User() {

  const [religion, setReligion] = useState(null)
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
          <Form.Group className="mb-3" id="personal-from">
            <Form.Label id="title-user">Personal info</Form.Label>
            <br />
            <Form.Label id="text-user">First name : </Form.Label>
            <Form.Control type="first-name" id="input-user" />
            <br />
            <Form.Label id="text-user">Last name : </Form.Label>
            <Form.Control type="last-name" id="input-user" />
            <br />
            <Form.Label id="text-user">Religion : </Form.Label>
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3" >
                  <Form.Check
                    inline
                    label="พุทธ"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onClick={() =>setReligion('buddhist')}
                    
                    checked = {religion==='buddhist'}
                  />
                  <Form.Check
                    inline
                    label="อิสลาม"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    onClick={() =>setReligion('islam')}
                    checked = {religion==='islam'}
                  />
                  <Form.Check
                    inline
                    label="คริสต์"
                    type={type}
                    id={`inline-${type}-3`}
                    onClick={() =>setReligion('christ')}
                    checked = {religion==='christ'}
                  />
                  <Form.Check
                    inline
                    label="อื่นๆ"
                    type={type}
                    id={`inline-${type}-4`}
                    onClick={() =>setReligion('other')}
                    checked = {religion==='other'}
                  />
                </div>
              ))}
            </Form>
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
