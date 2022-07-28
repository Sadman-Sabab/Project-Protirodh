import React from 'react'
import { Container, Card, Row, Col } from "react-bootstrap"

function Profile({ passUserData }) {
    return (
        <>

            <div className=" mx-auto">
                <Container>
                    <h2>Profile</h2>

                    <Row>
                        <Col md={6}>

                            <Card className='mt-3 mb-3'>
                                <Card.Body>
                                    <Card.Text>Name: {passUserData.name || passUserData.fullname}</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Text>Mobile No: {passUserData.mobileNumber}</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Text>Email: {passUserData.email}</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Text>Vaccination Center: {passUserData.vaccinationCenter}</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Text>First Dose: {passUserData.firstDoseCompleted ? "Done" : "Due"}</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Text>Second Dose: {passUserData.secondDoseCompleted ? "Done" : "Due"}</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Text>Third Dose: {passUserData.thirdDoseCompleted ? "Done" : "Due"}</Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={6}>

                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Profile