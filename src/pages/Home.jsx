import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-timer-img.png';
import useGetData from '../custom-hooks/useGetData';


const Home = () => {

  const {data: products, loading} = useGetData('products');

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);


  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item)=> item.category === 'motherboard'
    );
    
    const filteredBestSalesProducts = products.filter(
      (item)=> item.category === 'graphics card'
    );

    const filteredMobileProducts = products.filter(
      (item)=> item.category === 'cpu'
    );

    const filteredWirelessProducts = products.filter(
      (item)=> item.category === 'ram'
    );

    const filteredPopularProducts = products.filter(
      (item)=> item.category === 'psu'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)

  }, [products]);

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content p-5">
              <p className="hero__subtitle">Enter a new realm of performance in {year}</p>
              <h2>We Know What You Need</h2>
              <p>We know how difficult it can be to find the right desktop computer for you. That's why we offer a wide variety of pre-customized PCs in all price ranges, so you always have the best option for your budget.</p>
              
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
          {
            loading ? <h5 className='fw-bold'>Loading...</h5> : <ProductsList data={trendingProducts}/>
          }
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
          {
            loading ? <h5 className='fw-bold'>Loading...</h5> : <ProductsList data={bestSalesProducts}/>
          }
          </Row>
      </Container>
    </section>

    <p><ul><li>&nbsp;</li></ul></p>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
              <p><ul><li>&nbsp;</li></ul></p>
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>NVIDIA GeForce GTX 1060 Founders Edition Graphics Card</h3>
            </div>
            <Clock />

            <motion.button 
              whileTap={{scale: 1.2}} 
              className='buy__btn store__btn'
            >
              <Link to='/shop'>Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end mt-4 counter__img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <p><ul><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li></ul></p>
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading...</h5> : <ProductsList data={mobileProducts}/>
          }
          {
            loading ? <h5 className='fw-bold'>Loading...</h5> : <ProductsList data={wirelessProducts}/>
          }
        </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <p><ul><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li></ul></p>
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts}/>
        </Row>
      </Container>
      <p><ul><li>&nbsp;</li><li>&nbsp;</li></ul></p>
    </section>
  </Helmet>
};

export default Home;