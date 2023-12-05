import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RughtNav from '../pages/shared/rightnav/RughtNav';
import LeftNav from '../pages/shared/leftNav/LeftNav';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
      <Row className='mt-5'>
        <Col lg={3}>
            <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
           <Outlet></Outlet>
        </Col>
        <Col lg={3}>
            <RughtNav></RughtNav>
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;