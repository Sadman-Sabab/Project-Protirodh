import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Container,
  Card,
  Col,
  CardGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  return (
    <>
      <div>
        <Container>
          <div className="Align mt-3 mb-3">
            <h1>Vaccine Registration</h1>
            <h2>Three Different Ways</h2>
            <h4>Description</h4>
          </div>

          <Container >
            <div className="d-flex  flex-column flex-sm-row justify-content-center justify-content-md-evenly">
              <Card className="my-2 mx-2 " >
                <Card.Header>Registration Using NID</Card.Header>
                <Card.Body>
                  <Card.Text>
                    People who have NID card can register for vaccination
                    using NID Card number
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-2 mx-2 " >
                <Card.Header>Registration Using Birth Reg.</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Those who don't have NID card but have Birth Reg. Card
                    can now register for vaccination using Birth
                    Registration Card number
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-2 mx-2 " >
                <Card.Header>Registration Using Passport</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Those who have Passport can also register for
                    vaccination using Passport number
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* <CardGroup>


            </CardGroup> */}

            </div>
          </Container>

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
        </Container>
      </div>
      {/* <div>
        <div className="card border-dark" style={{ width: "18rem" }}>
          <div className="card-header bg-transparent border-dark text-center">
            <span style={{ fontWeight: "bold" }}>
              <em>Registration Using NID</em>
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">
              People who have NID card can register for vaccination using NID
              Card number
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Registration;
