import React,{useState} from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {

  const [productsData, setProductData] = useState(products)


  const handleFilter = e=>{

    const filterValue = e.target.value
      if (filterValue==='motherboard') {
        const filteredProducts = products.filter(
          (item)=> item.category==='motherboard'
        );

        setProductData(filteredProducts);
      }

      if (filterValue==='graphics card') {
        const filteredProducts = products.filter(
          (item)=> item.category==='graphics card'
        );

        setProductData(filteredProducts);
      }

      if (filterValue==='cpu') {
        const filteredProducts = products.filter(
          (item)=> item.category==='cpu'
        );

        setProductData(filteredProducts);
      }

      if (filterValue==='ram') {
        const filteredProducts = products.filter(
          (item)=> item.category==='ram'
        );

        setProductData(filteredProducts);
      }

      if (filterValue==='psu') {
        const filteredProducts = products.filter(
          (item)=> item.category==='psu'
        );

        setProductData(filteredProducts);
      }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductData(searchedProducts)
  }

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="motherboard">Motherboard</option>
                  <option value="graphics card">Graphics Card</option>
                  <option value="cpu">CPU</option>
                  <option value="ram">RAM</option>
                  <option value="psu">PSU</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3' className='text-end'>
            <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="text" placeholder='Search...' onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <section>
          <Container className='mb-5 pt-0'>
            <Row>
              {productsData.length === 0? (
                <h1 className='text-center fs-4 mb-5'>No Products are found!</h1>
              ) : (
                <ProductsList data = {productsData} />
              )}
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  )
}

export default Shop;