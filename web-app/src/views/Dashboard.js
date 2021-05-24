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

//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart,
// } from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
            <div
                id="map"
                className="m-2  "
                style={{ position: "relative", overflow: "hidden" }}
              >
                     <div className=" m-2 "><iframe  className="w-100  overflow-hidden m-2 " style={{height:600,  }} src="https://learngis1.maps.arcgis.com/apps/dashboards/951e06fb7d2c4b73b0719c48569c57b6" frameborder="0" allowFullScreen allow="geolocation *;"></iframe></div>
                     
                
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
