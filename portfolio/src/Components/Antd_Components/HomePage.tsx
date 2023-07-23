import Resume from "../../Resume/Akash_Kamble_8605719895.pdf";
import portaitImg1 from "../../Images/DSC05140_RR.jpg";
import cssClasses from "./HomePage.module.css";
import { Col, Row } from "antd";
const HomePage = () => {
  return (
    <>
      {/* general info  */}
      <Row className={cssClasses.generalInfo} align={"middle"}>
        <Col
          className={cssClasses.info}
          flex={"0 0 auto"}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
        >
          <h1 className={cssClasses.generalInfo_title}>
            Hey There, I'm Akash!
          </h1>
          <p className={cssClasses.generalInfo_desc}>
            I create your digital presence from design to production ready
            product.
          </p>

          <div className={cssClasses.exp}>
            <div className={cssClasses.exp_years}>2.0+</div>

            <div className={cssClasses.text}>
              <span className={cssClasses.exp_text1}>Years</span>
              <span className={cssClasses.exp_text2}>Experience</span>
            </div>
          </div>

          <a href={Resume} download>
            <button className={cssClasses.cvbtn}>Download CV</button>
          </a>
        </Col>

        <Col
          className={cssClasses.pic}
          flex={"1 1 auto"}
          md={0}
          lg={12}
          xl={12}
          xxl={12}
        >
          <img src={portaitImg1} alt="Akash" className={cssClasses.myImg} />
        </Col>
      </Row>

      {/* personal Details section  */}
    </>
  );
};

export default HomePage;
