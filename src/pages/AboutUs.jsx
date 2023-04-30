import React from "react";
import { Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const AboutUs = () => {
  return (
    <Helmet title="About Us">
      <CommonSection title="About Us" />
      <section>
        <Container className="p-5">
          <h4 className="pb-2 fs-4 fw-bold">Who are we?</h4>
          <p className="pb-2">
            We at TechHub pride in completing 10 years of our existence. Known
            in the IT market as a innovator of technology, Our Journey has truly
            been justified to our name. TechHub is dedicated to 100% customer
            delight ensuring that everything from placing your order to
            delivering it right to your doorstep is smooth and hassle-free.
          </p>
          <p className="pb-2">
            When it comes to online transactions, TechHub ensures that all
            credit/debit card and net banking transactions are done through
            secure and trusted gateways. All your bank details are safe and
            secure, and will not be shared with any third-party. TechHub is one
            of the leading IT distribution companies in India operating since
            its inception in 2013.
          </p>
          <p>
            Currently TechHub is acting as the authorized dealer for all
            global leading brands e.g. AMD, Antec, ASUS ,Cooler Master, Corsair,
            Circle, MSI, Sapphire, ZOTAC, Gigabyte, Intel, Steel series, Razer ,
            Logitech , Sapphire , Asrock , Acer for Karnataka We follow through
            on our commitment to exceptional customer service. Our tech support
            and service team members are available via phone & e-mail to ensure
            your utmost satisfaction.
          </p>
        </Container>
      </section>
    </Helmet>
  );
};

export default AboutUs;
