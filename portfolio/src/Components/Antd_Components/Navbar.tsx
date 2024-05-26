import cssClasses from "./Navbar.module.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { Col, Row, Space, Tooltip } from "antd";
import CustomMenu from "./CustomeMenu";  

const Navbar = () => {
  return (
    <>
      <Row className={cssClasses.header} align={"middle"}>
        <Col
          className={cssClasses.logo}
          flex={"0 1 auto"}
          sm={0}
          xs={0}
          lg={24}
          md={24}
        >
          Akash
        </Col>
        <Col flex={"auto"} className={cssClasses.menu}>
          <CustomMenu />
        </Col>
        <Space direction="horizontal" size="small">
          {/* <Col sm={0} xs={0} lg={24} md={0} >
            <span className={cssClasses.contact}>+91 8605719895</span>
          </Col> */}
          <Col xs={0} lg={24} md={24}>
            <Tooltip placement="bottom" title={"+91 8605719895"}>
            <span className={cssClasses.phoneIcon}>
              <BsFillTelephoneOutboundFill
                size="1x"
                className={cssClasses.icon}
              />
            </span>
            </Tooltip>
          </Col>
        </Space>
      </Row>
    </>
  );
};

export default Navbar;
