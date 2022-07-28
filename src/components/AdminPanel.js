import React from 'react'
import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

function AdminPanel({ history }) {




    return (
        <>
            <Container>
                <Row>
                    <h1 className='text-center bg-dark text-light p-2'>Admin Panel</h1>
                    <Col md={4}>
                        <ButtonGroup vertical>

                            <Button onClick={() => history.push("/Admin/userList")}>All Users</Button>
                            <Button onClick={() => history.push("/Admin/editUserData")}>Edit UserData</Button>

                        </ButtonGroup>
                    </Col>

                    <Col md={8}>
                        <Switch>
                            <Route path="/Admin/userList">
                                {/* <Userlist /> */}
                            </Route>
                            <Route path="Admin/editUserData">

                            </Route>
                        </Switch>

                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default AdminPanel