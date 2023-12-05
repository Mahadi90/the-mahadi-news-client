import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RughtNav from '../pages/shared/rightnav/RughtNav';


const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
      <Row className='mt-5'>
        <Col lg={9}>
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

export default NewsLayout;