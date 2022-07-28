import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Form, Row, Col, Button, FormGroup } from "react-bootstrap";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./App"

function Login({ setLoggedinUser }) {

  const { state, dispatch } = useContext(UserContext)

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const history = useHistory();
  const login = (e) => {

    axios.post("http://localhost:4000/app/login", user)
      .then(res => {
        dispatch({ type: "USER", payload: true })
        alert(res.data.message)
        console.log(res.data.message)
        console.log(res.data.access_token)
        console.log(res.data.userDataFromBackend)
        setLoggedinUser(res.data.userDataFromBackend)
        history.push("/")

      })
      .catch(err => {
        console.log(err.response.data.error)
        alert(err.response.data.error)
      })
  }


  return (
    <>
      <div className="login">
        {console.log("User", user)}
        <Container>
          <h2>Sign In</h2>

          <div className="mx-auto my-auto">
            <Form>
              <Row className="mb-2">
                <Col md={6}>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gamil.com"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={6}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="************"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <FormGroup as={Col}>
                <Button variant="secondary" onClick={login}>Login</Button>
              </FormGroup>

              {/* <FormGroup as={Col}>
                <a href="#">Forgot password?</a>
              </FormGroup> */}

              <div className="form-inline">
                <p className="d-inline">Don't have an account?</p>
                <Link to="/registration">
                  <a href="#">Register here</a>
                </Link>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Login;
