import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

export const StyledContentDiv = styled.div`
  padding: 10px;
  width: 100vw;
  height: calc(100vh - 50px);
  overflow: hidden auto;
  background: #ececec;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #fff; /* or add it to the track */
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #000;
  }
`;

const Content = ({ routes }) => {
  return (
    <StyledContentDiv>
      <Switch>
        {routes.map((route, routeIdx) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
            key={`${route.name}_${routeIdx}`}
          />
        ))}
      </Switch>
    </StyledContentDiv>
  );
};

export default Content;
