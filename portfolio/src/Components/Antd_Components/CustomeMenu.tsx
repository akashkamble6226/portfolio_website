import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Experience",
    key: "/experience",
  },

  {
    label: "Work",
    key: "/work",
  },
  {
    label: "Services",
    key: "/services",
  },
];

const CustomMenu: React.FC = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  const centerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderBottom: "0",
  } as React.CSSProperties;

  return (
    <>
      <Menu
     
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={centerStyle}
      />
    </>
  );
};

export default CustomMenu;
