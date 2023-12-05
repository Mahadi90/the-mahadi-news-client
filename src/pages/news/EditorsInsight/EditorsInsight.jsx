import React from 'react';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';

const EditorsInsight = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                 <p>Jan 4, 2022</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                 <p>Jan 4, 2022</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                 <p>Jan 4, 2022</p>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
};

export default EditorsInsight;