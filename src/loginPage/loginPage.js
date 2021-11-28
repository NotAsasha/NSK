import React, { Component } from "react";
import "./loginPage.css";
import Square from "../Other/backgroundSquare/Square";
import Form from 'react-bootstrap/Form'
import Button from "@restart/ui/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function LoginPage() {
  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button type="submit">
    Submit
  </Button>
</Form>
</div>
  );
}
export default LoginPage;
