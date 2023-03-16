import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/Helmet/Helmet';
import '../style/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

const Home = () => {

  const year = new Date().getFullYear()
  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p><ul><li>&nbsp;</li><li>&nbsp;</li></ul></p>
              <p className="hero__subtitle">Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non ducimus sint fuga et dolore tempora doloremque aperiam quae, in aut cum veritatis enim quod sapiente deserunt necessitatibus atque nulla?</p>
              
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <p><ul><li>&nbsp;</li><li>&nbsp;</li></ul></p>
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home;