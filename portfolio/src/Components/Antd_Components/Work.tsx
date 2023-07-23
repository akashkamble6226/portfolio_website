import cssClasses from "./Work.module.css";
import appDesing1 from "../../Images/androiddesign1.png";
import webDesign1 from "../../Images/webdesign1.png";
import appDev1 from "../../Images/appdev1.png";
import webDev1 from "../../Images/webdev1.png";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const Work = () => {
  return (
    <>
      <Col className={cssClasses.work}>
        <Col className={cssClasses.title}>
          <h1 className={cssClasses.work_heading}>My Latest Works</h1>
          <p className={cssClasses.work_desc}>
            Perfect way to create your digital presense
          </p>
        </Col>

        <Row gutter={[16, 16]} className={cssClasses.contentRow}>
          <Col xs={24} sm={24} md={12}>
            <a
              href="https://www.figma.com/file/F5O1XFKyCT0qTiBPB4I4oz/First_Flutter_App_On_Playstore?node-id=0%3A1&t=YI62hVmWClJk97zO-1"
              target="_blank"
              rel="noreferrer"
            >
              <div className={cssClasses.div1}>
                <div className={cssClasses.text}>
                  <Title>App Design</Title>
                  <Typography>Beautiful Quotes App</Typography>
                </div>
                <img
                  src={appDesing1}
                  alt="app-mockup"
                  className={cssClasses.work_img}
                />
              </div>
            </a>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <a
              href="https://www.figma.com/file/EiDOA6CCosnJafU4Fr0ieP/Portfolio_website?node-id=0%3A1&t=YI62hVmWClJk97zO-1
"
              target="_blank"
              rel="noreferrer"
            >
              <div className={cssClasses.div2}>
                <div className={cssClasses.text}>
                  <Title>Web Design</Title>
                  <Typography>Portfolio Website</Typography>
                </div>
                <img
                  src={webDesign1}
                  alt="app-mockup"
                  className={cssClasses.work_img}
                />
              </div>
            </a>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <a
              href="https://play.google.com/store/apps/details?id=com.newera.beautiful_quotes"
              target="_blank"
              rel="noreferrer"
            >
              <div className={cssClasses.div3}>
                <div className={cssClasses.text}>
                  <Title>App Dev</Title>
                  <Typography>Beautiful Quotes App</Typography>
                </div>
                <img
                  src={appDev1}
                  alt="app-mockup"
                  className={cssClasses.work_img}
                />
              </div>
            </a>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={cssClasses.div4}>
              <div className={cssClasses.text}>
                <Title>Web Dev</Title>
                <Typography>Portfolio Website</Typography>
              </div>
              <img
                src={webDev1}
                alt="app-mockup"
                className={cssClasses.work_img}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Work;
