import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./Passport_Reg.css";
import axios from "axios";

function Passport_Reg() {
  const [user, setUser] = useState({
    uniqueId: "",
    day: "",
    month: "",
    year: "",
    // date: {
    //   day: this.day,
    //   month: this.month,
    //   year: this.year,
    // },
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    vaccinationCenter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const history = useHistory();
  const register = () => {
    const {
      uniqueId,
      day,
      month,
      year,
      name,
      mobileNumber,
      email,
      password,
      vaccinationCenter,
    } = user;
    if (
      uniqueId &&
      day &&
      month &&
      year &&
      name &&
      mobileNumber &&
      email &&
      password &&
      vaccinationCenter
    ) {
      axios
        .post("http://localhost:4000/app/signup", user)
        .then((res) => {
          console.log(res.data.message)
          alert(res.data.message)
          history.push("/login")

        }).catch(err => {
          console.log(err.response.data.error)
          alert(err.response.data.message)
        });
    } else {
      console.log("every field is necessary");
      alert("every field is necessary");
    }
  };
  return (
    <>
      <div class="container Align">
        {console.log("User", user)}
        <h1>Registration( Passport )</h1>
        <h5>Complete your registration using Passport number</h5>
      </div>

      {/*Kind of Navigation buttons*/}
      <div class="d-flex gap-2 mt-5 p-2 flex-column flex-sm-row justify-content-center text-center">
        <Link to="/nid">
          <div>
            <a href="" class="btn btn-secondary rounded" role="button">
              NID Card
            </a>
          </div>
        </Link>

        <Link to="/birth_reg">
          <div>
            <a
              href="E:\2-2 project\Protirodh\registration( Birth Registration Certificate ).html"
              class="btn btn-secondary rounded"
              role="button"
            >
              Birth Reg. Certificate
            </a>
          </div>
        </Link>

        <Link to="/passport">
          <div>
            <a
              href="E:\2-2 project\Protirodh\registration( Passport ).html"
              class="btn btn-secondary rounded"
              role="button"
            >
              Passport
            </a>
          </div>
        </Link>
      </div>

      {/* form begins here */}
      <Container>
        <Form>
          {/* Identity Verification Part */}
          <div className="mt-3 mb-3">
            <h4>Identity Verification</h4>
            {/* <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Select aria-label="Default select example">
                                <option selected>Choose your category</option>
                                <option value="1">Students of age 18 & above</option>
                                <option value="2">Students in medical education related subjects</option>
                                <option value="3">Citizen registration(18 year & above)</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Select aria-label="Default select example">
                                <option selected>Choose your sub-category</option>
                                <option value="5">Public/Dental/Private Medical Students</option>
                                <option value="6">Government Nursing Midwifery College/Institute Students
                                </option>
                                <option value="7">Student of Government IHT</option>
                                <option value="8">Student of Government MATS</option>
                            </Form.Select>
                        </Form.Group>
                    </Row> */}
            <Row>
              <Col md={5}>
                <Form.Label>Passport Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Example - AC0348621"
                  name="uniqueId"
                  value={user.uniqueId}
                  onChange={handleChange}
                />
              </Col>

              <Col md={5}>
                <Form.Label>Date of birth ( According to Passport )</Form.Label>
                <Row>
                  <Col md={4}>
                    <Form.Select
                      aria-label="Default select example"
                      name="day"
                      value={user.day}
                      onChange={handleChange}
                    >
                      <option default value="Day">
                        Day
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Form.Select
                      aria-label="Default select example"
                      name="month"
                      value={user.month}
                      onChange={handleChange}
                    >
                      <option default value="Month">
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Form.Select
                      aria-label="Default select example"
                      name="year"
                      value={user.year}
                      onChange={handleChange}
                    >
                      <option default value="Year">
                        Year
                      </option>
                      <option value="1944">1944</option>
                      <option value="1945">1945</option>
                      <option value="1946">1946</option>
                      <option value="1947">1947</option>
                      <option value="1948">1948</option>
                      <option value="1949">1949</option>
                      <option value="1950">1950</option>
                      <option value="1951">1951</option>
                      <option value="1952">1952</option>
                      <option value="1953">1953</option>
                      <option value="1954">1954</option>
                      <option value="1955">1955</option>
                      <option value="1956">1956</option>
                      <option value="1957">1957</option>
                      <option value="1958">1958</option>
                      <option value="1959">1959</option>
                      <option value="1960">1960</option>
                      <option value="1961">1961</option>
                      <option value="1962">1962</option>
                      <option value="1963">1963</option>
                      <option value="1964">1964</option>
                      <option value="1965">1965</option>
                      <option value="1966">1966</option>
                      <option value="1967">1967</option>
                      <option value="1968">1968</option>
                      <option value="1969">1969</option>
                      <option value="1970">1970</option>
                      <option value="1971">1971</option>
                      <option value="1972">1972</option>
                      <option value="1973">1973</option>
                      <option value="1974">1974</option>
                      <option value="1975">1975</option>
                      <option value="1976">1976</option>
                      <option value="1977">1977</option>
                      <option value="1978">1978</option>
                      <option value="1979">1979</option>
                      <option value="1980">1980</option>
                      <option value="1981">1981</option>
                      <option value="1982">1982</option>
                      <option value="1983">1983</option>
                      <option value="1984">1984</option>
                      <option value="1985">1985</option>
                      <option value="1986">1986</option>
                      <option value="1987">1987</option>
                      <option value="1988">1988</option>
                      <option value="1989">1989</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                      <option value="1998">1998</option>
                      <option value="1999">1999</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
                      <option value="2005">2005</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          {/* Personal Information part */}
          <div className="mt-3 mb-3">
            <Row>
              <h5>Personal Information</h5>
              <Col md={5}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={5}>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Example - 01712034546"
                  name="mobileNumber"
                  value={user.mobileNumber}
                  onChange={handleChange}
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Please provide the number correctly for further use{" "}
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Col>

              <Col md={5}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="****************"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>

          {/* Present Address Part */}

          {/* <h5>Present Address</h5>

                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Division</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Chattogram</option>
                                <option value="3">Rajshahi</option>
                                <option value="4">Khulna</option>
                                <option value="5">Barishal</option>
                                <option value="6">Sylhet</option>
                                <option value="7">Rangpur</option>
                                <option value="8">Narayanganj</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>District</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Upazilla</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Union</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Ward</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Village</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Row> */}

          {/* Vaccination Center Choosing Part */}
          <div className="mt-3 mb-3">
            <Row>
              <h5>Select Your Desireable Center For Vaccination</h5>
              <Col md={5}>
                <Form.Label>Name of Center</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="vaccinationCenter"
                  value={user.vaccinationCenter}
                  onChange={handleChange}
                >
                  <option defaultValue={"Choose your center"}>
                    Choose your center
                  </option>
                  <option value="M Abdur Rahim Medical College, Dinajpur">
                    M Abdur Rahim Medical College, Dinajpur
                  </option>
                  <option value="Rangpur Medical College, Rangpur">
                    Rangpur Medical College, Rangpur
                  </option>
                  <option value="Rajshahi Medical College, Rajshahi">
                    Rajshahi Medical College, Rajshahi
                  </option>
                  <option value="Dhaka Medical College, Dhaka">
                    Dhaka Medical College, Dhaka
                  </option>
                  <option
                    value="Chattogram Medical College, Chattogram
"
                  >
                    Chattogram Medical College, Chattogram
                  </option>
                  <option value="Cumilla Medical College, Cumilla">
                    Cumilla Medical College, Cumilla
                  </option>
                  <option value="Barishal Medical College, Barishal">
                    Barishal Medical College, Barishal
                  </option>
                </Form.Select>
              </Col>
            </Row>

            <div className="mt-3 mb-3">
              <Form.Check
                type="checkbox"
                label="I am certifying that the information given above are true"
              />
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-5">
            <button type="button" className="btn btn-light">
              Cancel
            </button>
            <button type="button" className="btn btn-secondary" onClick={register}>
              Save Information
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Passport_Reg;
