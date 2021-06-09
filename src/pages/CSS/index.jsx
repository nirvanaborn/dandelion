import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import styled from "styled-components";

const StyledLab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .lab-u {
    position: relative;
    border-bottom: 50px solid #000;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    height: 0;
    width: 80px;
    .light {
      width: 80px;
      height: 50px;
      position: relative;
      left: -20px;
      top: 50px;
      overflow: hidden;
      transition: all 3s ease-in-out;
      &:after {
        content: "";
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        top: -50px;
        animation: ${(props) =>
          props.isLight === null
            ? "null"
            : props.isLight
            ? "light 500ms ease-in 100ms forwards"
            : "crush 500ms ease-out 100ms backwards"};
      }
    }
  }
  .lab-m {
    width: 5px;
    height: 40px;
    background-color: #000;
    position: relative;
    #line {
      width: 3px;
      height: 20px;
      background-color: #000;
      position: relative;
      left: 20px;
      transition: 300ms;
      transform-origin: 100% 0 0;
      animation: none;
    }
  }

  .lab-b {
    width: 40px;
    height: 5px;
    background-color: #000;
  }

  .pull {
    animation: pullLine 500ms !important;
  }

  @keyframes pullLine {
    0% {
      height: 20px;
    }
    50% {
      height: 30px;
    }
    100% {
      height: 20px;
    }
  }

  @keyframes light {
    from {
      background: transparent;
    }
    to {
      background: linear-gradient(
        to top,
        rgba(255, 255, 0, 0.1),
        rgba(255, 255, 0, 0.5),
        rgba(255, 255, 0, 0.75),
        rgba(255, 255, 0, 1)
      );
      box-shadow: 0 0 15px 15px rgb(255 255 0 / 20%);
    }
  }

  @keyframes crush {
    from {
      background: linear-gradient(
        to top,
        rgba(255, 255, 0, 0.1),
        rgba(255, 255, 0, 0.5),
        rgba(255, 255, 0, 0.75),
        rgba(255, 255, 0, 1)
      );
      box-shadow: 0 0 15px 15px rgb(255 255 0 / 20%);
    }
    to {
      background: transparent;
    }
  }
`;
const CSS = () => {
  const [labFlag, setLabFlag] = useState(false);
  const [isLight, setIsLight] = useState(null);
  var labTimer = null;
  const onChange = () => {
    if (labTimer !== null) {
      clearTimeout(labTimer);
    }
    labTimer = setTimeout(() => {
      setLabFlag(labFlag);
    }, 500);
    setLabFlag(!labFlag);
    if (isLight === null) {
      setIsLight(!labFlag);
    }
    setIsLight(!isLight);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <StyledLab id="lab" isLight={isLight}>
          <div className="lab-u">
            <div className="light"></div>
          </div>
          <div className="lab-m">
            <div id="line" className={labFlag ? "pull" : ""}></div>
          </div>
          <div className="lab-b"></div>
        </StyledLab>
      </div>
      <Switch onChange={onChange} />
    </div>
  );
};

export default CSS;
