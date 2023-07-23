import cssClasses from "./Services.module.css";

import { MdOutlineDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

import { Col, Row, Space, Typography } from "antd";

const { Title } = Typography;
const Services = () => {
  return (
    <>
      <div className={cssClasses.services}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {/* Content for the first column */}
            {/* <div style={{ backgroundColor: '#f0f0f0', padding: 16 }}>Column 1</div> */}
            <h1 className={cssClasses.serv_title}>What do I help?</h1>
            <Space size={"large"} direction="vertical">
              <p className={cssClasses.desc_p1}>
                I will help you with finding a solution for your problems. I use
                and follow SDLC life cycle to construct your product from
                scratch.
              </p>

              <p className={cssClasses.desc_p2}>
                I will help your business to get ready for the digital presence.
                I will make sure, you reach your clients in more attractive way.
              </p>

              <div className={cssClasses.proj_status}>
                <span className={cssClasses.completed}>
                  <h1 className={cssClasses.proj_numbers1}>4+</h1>
                  <p className={cssClasses.proj_numbers_title1}>
                    Project Completed
                  </p>
                </span>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Col span={24}>
              <div className={cssClasses.box1}>
                <Row className={cssClasses.paddingAround}>
                  <Space size={"large"}>
                    <div className={cssClasses.circle}>
                      <span className={cssClasses.web_icon}>
                        <MdOutlineDesignServices
                          size="2em"
                          className={cssClasses.icon}
                        />
                      </span>
                    </div>

                    <div className={cssClasses.text}>
                      <Title level={3}>Website Design</Title>
                      <Typography>1 Project</Typography>
                    </div>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className={cssClasses.box2}>
                <Row className={cssClasses.paddingAround}>
                  <Space size={"large"}>
                    <div className={cssClasses.circle}>
                      <span className={cssClasses.web_icon}>
                        <MdOutlineDesignServices
                          size="2em"
                          className={cssClasses.icon}
                        />
                      </span>
                    </div>

                    <div className={cssClasses.text}>
                      <Title level={3}>Mobile App Design</Title>
                      <Typography>1 Project</Typography>
                    </div>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className={cssClasses.box3}>
                <Row className={cssClasses.paddingAround}>
                  <Space size={"large"}>
                    <div className={cssClasses.circle}>
                      <span className={cssClasses.web_icon}>
                        <BsCodeSlash size="2em" className={cssClasses.icon} />
                      </span>
                    </div>

                    <div className={cssClasses.text}>
                      <Title level={3}>Website Building</Title>
                      <Typography>1 Project</Typography>
                    </div>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className={cssClasses.box4}>
                <Row className={cssClasses.paddingAround}>
                  <Space size={"large"}>
                    <div className={cssClasses.circle}>
                      <span className={cssClasses.web_icon}>
                        <BsCodeSlash size="2em" className={cssClasses.icon} />
                      </span>
                    </div>

                    <div className={cssClasses.text}>
                      <Title level={3}>Mobile App Building</Title>
                      <Typography>1 Project</Typography>
                    </div>
                  </Space>
                </Row>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Services;
