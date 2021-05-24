/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="mt-4">
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-minimal-right text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">Vission</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div>
                    {/* <i className="far fa-calendar" /> Last day */}
                    <p className="stats">
                      Make Egypt the world’s most visited country.
                    </p>
                    <br></br>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-minimal-right text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">Mission</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div>
                    {/* <i className="far fa-calendar" /> Last day */}
                    <p className="stats">
                      Do what we need to achieve our vision and providing
                      high-tech tools to our users.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row >
            <Col md="12" >
              <Card >
                <CardHeader>
                  <CardTitle tag="h5">Team</CardTitle>
                </CardHeader>
                <CardBody >
                  <div className="row" >
                    <div className="col-sm">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray  ml-4"
                          src={require("assets/img/nour.jpg")}
                          style={{ width: 100,height: 100,}}

                        />
                        <h5 className="title">Nourhan Radwan</h5>
                      </a>
                    </div>

                    <div className="col-sm">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("assets/img/mike.jpg")}
                          style={{ width: 100,height: 100,}}
                        />
                        <h5 className="title">Amina Adel</h5>
                      </a>
                    </div>
                    <div className="col-sm">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray  ml-1"
                          src={require("assets/img/Fathy.jpg")}
                          style={{ width: 100,height: 100,}}
                        />
                        <h5 className="title">Ahmed Fathy</h5>
                      </a>
                    </div>
                    <div className="col-sm">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("assets/img/omar1.jpg")}
                          style={{ width: 100,height: 100,}}
                        />
                        <h5 className="title">Omar Farag</h5>
                      </a>
                    </div>
                    <div className="col-sm  ">
                      <a href="#pablo" onClick={(e) => e.preventDefault()} >
                        <img
                          alt="..."
                          className="avatar border-gray ml-5"
                          src={require("assets/img/Osa.jpg")}
                          style={{ width: 100,height: 100,}}
                        />
                        <h5 className="title">Mostafa Mahmoud</h5>
                      </a>
                    </div>
                  </div>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
         
        </div>
      </>
    );
  }
}

export default AboutUs;
