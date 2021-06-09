import React from "react";
import { HashRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.less";
import routes from "./routes";
import Header from "./components/Header";
import Content from "./pages/Content";
export const StyledAppDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <HashRouter>
      <StyledAppDiv className="App">
        <Header routes={routes} />
        <Content routes={routes} />
      </StyledAppDiv>
    </HashRouter>
  );
}

export default App;
