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

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

class Tour extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row>
            <Col>
            <div
                id="map"
                className="m-2 "
                style={{ position: "relative", overflow: "hidden" }}
              >
                     <div className=" m-2 "><iframe  className="w-100  overflow-hidden m-2 " style={{height:600 }} src="https://www.arcgis.com/apps/MapJournal/index.html?appid=6d173057d44347debca28b131c802c88" frameborder="0" allowFullScreen></iframe></div>
                     
                
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tour;
