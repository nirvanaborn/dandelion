import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";
export const StyledHeaderDiv = styled.div`
  width: 100vw;
  height: 50px;
  .ant-menu {
    display: flex;
    box-shadow: 0px 2px 5px 10px #eee;
    .ant-menu-item {
      display: flex;
      align-items: center;
      .ant-image {
        margin-right: 15px;
      }
    }
  }
`;
const Header = ({ location, routes }) => {
  const [current, setCurrent] = useState(location.pathname);
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <StyledHeaderDiv>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {routes.map((route) => (
          <Menu.Item key={route.path} icon={route.icon}>
            <Link to={route.path}>{route.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </StyledHeaderDiv>
  );
};

export default withRouter(Header);
