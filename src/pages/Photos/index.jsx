import React, { useEffect, useState, useCallback } from "react";
import { Tabs } from "antd";
import Img from "react-cool-img";
import styled from "styled-components";
import fineFoodImages from "../../assets/images/FineFood";
import lifeImages from "../../assets/images/Life";
import mineImages from "../../assets/images/Mine";
import sceneryImages from "../../assets/images/Scenery";
const { TabPane } = Tabs;
const StyledColumnDiv = styled.div`
  margin: 10px;
  column-count: 8;
  column-gap: 20px;
  @media (max-width: 1200px) {
    column-count: 8;
  }
  @media (max-width: 992px) {
    column-count: 6;
  }
  @media (max-width: 768px) {
    column-count: 5;
  }
  @media (max-width: 480px) {
    column-count: 3;
  }
`;
const StyledImgDiv = styled.div`
  break-inside: avoid;
  margin-bottom: 20px;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  border: 5px solid #000;
  box-shadow: 0px 1px 2px -2px rgba(0, 0, 0, 0.16),
    0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 5px 12px 4px rgba(0, 0, 0, 0.09);
  transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  img {
    background-color: grey;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  /* @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      transform: translateY(50px) scale(1.5, 1.5);
    }
  } */
`;
const Photos = () => {
  const callback = () => {};
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Life" key="life">
        <StyledColumnDiv>
          {lifeImages.map((item, idx) => (
            <StyledImgDiv key={idx}>
              <Img src={item} debounce={3000} alt="React Cool Img" cache />
            </StyledImgDiv>
          ))}
        </StyledColumnDiv>
      </TabPane>
      <TabPane tab="Fine Food" key="fineFood">
        <StyledColumnDiv>
          {fineFoodImages.map((item, idx) => (
            <StyledImgDiv key={idx}>
              <Img src={item} debounce={3000} alt="React Cool Img" cache />
            </StyledImgDiv>
          ))}
        </StyledColumnDiv>
      </TabPane>
      <TabPane tab="Mine" key="mine">
        <StyledColumnDiv>
          {mineImages.map((item, idx) => (
            <StyledImgDiv key={idx}>
              <Img src={item} debounce={3000} alt="React Cool Img" cache />
            </StyledImgDiv>
          ))}
        </StyledColumnDiv>
      </TabPane>
      <TabPane tab="Scenery" key="scenery">
        <StyledColumnDiv>
          {sceneryImages.map((item, idx) => (
            <StyledImgDiv key={idx}>
              <Img src={item} debounce={3000} alt="React Cool Img" cache />
            </StyledImgDiv>
          ))}
        </StyledColumnDiv>
      </TabPane>
    </Tabs>
  );
};
export default Photos;
