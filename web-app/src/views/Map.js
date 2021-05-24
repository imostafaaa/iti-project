import React, { useEffect, useRef, useState,Component } from 'react';
import { loadModules } from 'esri-loader';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Maps } from 'views/Map.js';
import CardFooter from 'reactstrap/lib/CardFooter';

const WebMapView = () => {
  return ( 
    <>
    <div className="content" >
      <Row> 
        <Col>
        <Card>
              <CardHeader></CardHeader>
              <CardBody className="w-100 h-100 p-0 ">
              <div
                id="map"
                className="w-100 p-0 "
                style={{ position: "relative", overflow: "hidden", height:500, }}
              >
                     <div className="w-100 h-100 p-0 "><iframe  className="w-100 h-100  overflow-hidden " style={{}} src="http://localhost/pro/trans.html" frameborder="0" allowFullScreen allow="geolocation *;"></iframe></div>
                     
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
 
export default WebMapView;

