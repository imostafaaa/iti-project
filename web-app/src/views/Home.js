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
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import { Carousel } from "3d-react-carousal";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
let slides = [
  <img
    src={require("assets/img/1.jpg")}
    alt="1"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/2.jpg")}
    alt="2"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/3.jpg")}
    alt="3"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/4.jpg")}
    alt="4"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/5.jpg")}
    alt="5"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/6.jpg")}
    alt="6"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/7.jpg")}
    alt="7"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/8.jpg")}
    alt="8"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/9.jpg")}
    alt="9"
    style={{ height: 300, width: 600 }}
  />,
  <img
    src={require("assets/img/10.jpg")}
    alt="10"
    style={{ height: 300, width: 600 }}
  />,
];

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5"></CardTitle>
                </CardHeader>
                <CardBody>
                  <Carousel slides={slides} autoplay={true} interval={2000} />
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="m-4">
            <Col md="12">
              <p className="text-center ">
                <h2>Touristic routes to match your interest!</h2>
                <p className="text-muted">
                  have a particular passion for history, art or experiencing the
                  great outdoors,
                  <br />
                  or you're planning a trip for a special occasion, <br />
                  we can create an itinerary to match your interests and tastes.
                </p>
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-tv-2 text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">Dashboard</CardTitle>
                        <p className="card-category">
                          get to know some relations and statistical facts
                        </p>
                        <br></br>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    {/* <i className="far fa-calendar" /> Last day */}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-map-big text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">Tour</CardTitle>
                        <p className="card-category">
                          overview recommended attractions of various categories{" "}
                          <br /> &nbsp;&nbsp;{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    {/* <i className="far fa-clock" /> In the last hour */}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon  nc-pin-3 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">Map</CardTitle>
                        <p className="card-category">
                          create custome route, get recommended one, find near
                          service.
                          <br /> &nbsp;&nbsp;
                        </p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    {/* <i className="fas fa-sync-alt" /> Update now */}
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

export default Home;
