import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {


  const [trendingProducts, setTrendingProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredProducts = products.filter(
      (item)=> item.category === 'chair'
    );

    setTrendingProducts(filteredProducts);
  }, []);

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p><ul><li>&nbsp;</li></ul></p>
              <p className="hero__subtitle">Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non ducimus sint fuga et dolore tempora doloremque aperiam quae, in aut cum veritatis enim quod sapiente deserunt necessitatibus atque nulla?</p>
              
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <p><ul><li>&nbsp;</li></ul></p>
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <p><ul><li>&nbsp;</li><li>&nbsp;</li></ul></p>
    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
          <p><ul><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li></ul></p>
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className="best__seles">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
          <p><ul><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li></ul></p>
            <h2 className="section__title">Best Sales</h2>
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
};

export default Home;