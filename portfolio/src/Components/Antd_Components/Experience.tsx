import { Col, Row, Typography } from "antd";
import cssClasses from "./Experience.module.css";

const { Title } = Typography;

const Experience = () => {
  return (
    <>
      <Col>
        <Row className={cssClasses.text} justify={"center"}>
          <h1 className={cssClasses.experience_title}>My Work Experience</h1>
        </Row>
        <Row className={cssClasses.experience} wrap={false} justify={"center"}>
          <Col flex={"1 0 auto"}>
            <span>
              <Title level={2}>Accenture Solutions</Title>
              <Typography className={cssClasses.company_desc2}>
                Oct 2021 - Till Date
              </Typography>
            </span>
            <div className={cssClasses.extraSpaceOuter}>
              <div className={cssClasses.extraSpace}></div>
            </div>
            <span>
              <Title level={2} className={cssClasses.company_title1}>
                Cereb Media Company
              </Title>
              <Typography className={cssClasses.company_desc1}>
                July 2020 - Sep 2020
              </Typography>
            </span>
            {/* </Space> */}
          </Col>

          {/* col2 */}
          <Col className={cssClasses.wrapper} span={4}>
            <div className={cssClasses.circle}>
              <div className={cssClasses.iCircle}></div>
            </div>
            <div className={cssClasses.line}></div>
            <div className={cssClasses.circle}>
              <div className={cssClasses.iCircle}></div>
            </div>
          </Col>

          {/* col3 */}
          <Col
            className={cssClasses.details}
            flex={"1 0 auto"}
            xs={0}
            sm={0}
            md={12}
          >
            {/* <Space direction="vertical" size={"large"}> */}
            <span>
              <Title level={2} className={cssClasses.company_detail_title2}>
                Full Stack Developer
              </Title>
              <Typography className={cssClasses.company_detail_desc2}>
                Learning many things.
              </Typography>
            </span>

            <div className={cssClasses.extraSpaceOuter}>
              <div className={cssClasses.extraSpace}></div>
            </div>

            <span>
              <Title level={2} className={cssClasses.company_detail_title1}>
                Web Dev Internship
              </Title>
              <Typography className={cssClasses.company_detail_desc1}>
                Learned basics of web development.
              </Typography>
            </span>
          </Col>
        </Row>
        ;
      </Col>
    </>
  );
};

export default Experience;

/*

*/
