import React, { useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import { Link } from "react-router-dom";
import vaccine from "../images/vaccine.jpg";
import { UserContext } from "./App"

function Home() {

  const { state } = useContext(UserContext)

  return (
    <>
      <div className=" mx-auto">
        <Container>
          <div>
            <Card
              style={{ width: "30rem" }}
              className="text-center mt-3 mx-auto"
            >
              <Card.Body>
                <Card.Title>Vaccine Registration</Card.Title>
                {/* <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8N1p7Tgx1-KqqWA5xL8R6ksFjG1xrbGYQw&usqp=CAU" /> */}
                <div className="img">
                  <Card.Img src={vaccine} />

                </div>

                {/*  I have to start from here
                   I have to change the button and card.text based on user
                   logged in or not
                */}

                {
                  state ?
                    <div>
                      <Card.Text>Check your informatin....</Card.Text>
                      <Link to="/profile">
                        <Button variant="secondary">Profile</Button>
                      </Link>
                    </div>
                    :
                    <div>
                      <Card.Text>To Register....</Card.Text>
                      <Link to="/registration">
                        <Button variant="secondary">Click here</Button>
                      </Link>
                    </div>
                }





              </Card.Body>
            </Card>

          </div>
        </Container>
      </div>
      {/* <Image src={vaccine} />
      <img src={vaccine}></img> */}
    </>
  );
}

export default Home;
