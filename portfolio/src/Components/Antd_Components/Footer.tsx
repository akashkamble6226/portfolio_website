import cssClasses from "./Footer.module.css";

import { FiMapPin } from "react-icons/fi";

import { BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";

import { Col, Row, Typography } from "antd";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <Col className={cssClasses.footer}>
        <Row className={cssClasses.title}>
          <h1 className={cssClasses.heading}>
            Let’s create something cool together.
          </h1>
        </Row>

        <Row className={cssClasses.details}>
          {/* address */}
          <Col
            className={cssClasses.address}
            span={8}
            xs={0}
            sm={0}
            md={8}
            lg={8}
          >
            <span className={cssClasses.address_circle}>
              <FiMapPin size={"2em"} className={cssClasses.address_icon} />
            </span>

            <h5 className={cssClasses.address_title}>Address</h5>

            <Typography className={cssClasses.address_desc}>
              Baramati
            </Typography>
          </Col>

          {/* email */}

          <Col className={cssClasses.address} span={8} xs={0} sm={14}  md={8}
            lg={8}> 
            <span className={cssClasses.address_circle}>
              <HiOutlineMail size={"2em"} className={cssClasses.address_icon} />
            </span>

            <h5 className={cssClasses.address_title}>Email</h5>

            <Typography className={cssClasses.address_desc}>
              official.akashk@gmail.com
            </Typography>
          </Col>

          {/* phone */}

          <Col className={cssClasses.address} span={8} xs={24} sm={10}  md={8}
            lg={8}>
            <span className={cssClasses.address_circle}>
              <BsTelephoneFill
                size={"1.5em"}
                className={cssClasses.address_icon}
              />
            </span>

            <h5 className={cssClasses.address_title}>Phone</h5>

            <Typography className={cssClasses.address_desc}>
              +91 8605719895
            </Typography>
          </Col>
        </Row>

        <hr className={cssClasses.horizontal_line} />
        <Row className={cssClasses.footer_info}>
          {/* <span className={cssClasses.bottom_img_span}>
                        <img src={portaitImg2} alt="Akash" className={cssClasses.bottom_img}/>

                    </span> */}

          <h5 className={cssClasses.mine_name}>Akash Kamble</h5>

          <div className={cssClasses.mine_socila_media}>
            {/* <a
              href="https://twitter.com/akash6226"
              target="_blank"
              rel="noreferrer"
            >
              <span className={cssClasses.twitter}>
                <BsTwitter size={"1.5em"} className={cssClasses.footer_img} />
              </span>
            </a> */}

            <a
              href="https://www.linkedin.com/in/akash-kamble-403467152/"
              target="_blank"
              rel="noreferrer"
            >
              <span className={cssClasses.linkedin}>
                <BsLinkedin size={"1.5em"} className={cssClasses.footer_img} />
              </span>
            </a>

            {/* <a
              href="https://www.instagram.com/akashkamble6226/"
              target="_blank"
              rel="noreferrer"
            >
              <span className={cssClasses.instagram}>
                <BsInstagram size={"1.5em"} className={cssClasses.footer_img} />
              </span>
            </a> */}

            <a
              href="https://opensea.io/collection/metagnet"
              target="_blank"
              rel="noreferrer"
            >
              <span className={cssClasses.opensea}>
                <SiOpensea size={"1.5em"} className={cssClasses.footer_img} />
              </span>
            </a>
          </div>
        </Row>
      </Col>
    </>
  );
};

export default Footer;
