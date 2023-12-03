import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={3}>
            <h2>left nav</h2>
        </Col>
        <Col lg={6}>
            <h2>Main cooming soon</h2>
        </Col>
        <Col lg={3}>
            <h2>right nav</h2>
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;