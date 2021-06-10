import React, { useState, useEffect } from "react";
import { Switch, Card } from "antd";
import styled from "styled-components";
import {
  StaggeredMotion,
  TransitionMotion,
  Motion,
  spring,
  presets,
} from "react-motion";

const StyledLab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .lamp-u {
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
      &:after {
        content: "";
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        background: linear-gradient(
          to top,
          rgba(255, 255, 0, 0.1),
          rgba(255, 255, 0, 0.5),
          rgba(255, 255, 0, 0.75),
          rgba(255, 255, 0, 1)
        );
        box-shadow: 0px -5px 15px 22px rgb(255 255 0 / 15%);
        top: -50px;
      }
    }
  }
  .lamp-m {
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
      transform-origin: 100% 0 0;
    }
  }

  .lamp-b {
    width: 40px;
    height: 5px;
    background-color: #000;
  }
`;
const StyledComputerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 300px;
  .sc {
    width: 100px;
    height: 80px;
    border-width: 5px 3px 8px;
    border-style: solid;
    border-color: #000;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-origin: 0 100% 0;
    transform: rotateX(-120deg);
    background-color: #000;
    z-index: 1;
    transition: all 100ms ease-in-out;
    .camera {
      position: absolute;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: #fff;
      bottom: -6px;
      left: 50%;
      border: 1px solid #eee;
      opacity: 0;
    }
    .windows {
      perspective: 35px;
      opacity: 0;
      transition: all 800ms;
      .wc {
        margin: 0 auto;
        width: 20px;
        height: 16px;
        transform: rotateY(-35deg);
        transform-origin: 100% 0 0;
        display: flex;
        flex-wrap: wrap;
        background-color: transparent;
        box-shadow: 1px 5px 8px 2px #999;
        .ws {
          width: 50%;
          height: 50%;
          border: 1px solid #fff;
          background: #000;
        }
      }
    }
  }
  .b {
    width: 100px;
    height: 80px;
    transform: rotateX(60deg);
    transform-origin: 100% 0 0;
    border: 3px solid #000;
    box-shadow: 0px 10px 7px 0px #000;
    display: flex;
    justify-content: center;
    padding: 5px 3px;
    background-color: #000;
    border-top: 3px solid #fff;
    .c {
      width: 100px;
      height: 70px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-color: #000;
      .btn {
        display: inline-block;
        width: 6px;
        height: 7px;
        border: 1px solid #000;
        background-color: #000;
        margin: 1px;
        transition: all 300ms ease-in-out;
      }
      .tb {
        width: 30px;
        height: 20px;
        background-color: #000;
        margin: 1px;
        border: 1px solid #fff;
        transition: all 300ms ease-in-out;
      }
      .alive {
        animation: breathing-LED 3s infinite;
      }
    }
  }
  @keyframes breathing-LED {
    0% {
      border: 1px solid #fff;
    }
    50% {
      border: 1px solid #444;
    }
    100% {
      border: 1px solid #fff;
    }
  }
`;

const CSS = () => {
  const [lineLength, setLineLength] = useState(1);
  const [isLight, setIsLight] = useState(false);
  const [computerOpacity, setComputerOpacity] = useState(0);
  const [scBackground, setScBackground] = useState("#000");
  const [scRotate, setScRotate] = useState(-120);
  const [btnFlag, setBtnFlag] = useState(false);
  var computerTimer = null;
  var btnTimer = null;
  // Lamp开关
  const handleLamp = () => {
    let targetX = 0;
    if (lineLength === 1) {
      targetX = 1.5;
    } else {
      targetX = 1;
    }
    setLineLength(targetX);
    setIsLight(!isLight);
  };
  // Computer开关
  const handleOpenComputer = () => {
    let rotate = 0;
    let opacity = 0;
    if (scRotate === -120) {
      rotate = 0;
      opacity = 1;
    } else {
      rotate = -120;
      opacity = 0;
    }
    if (computerTimer !== null || btnTimer !== null) {
      clearTimeout(computerTimer);
      clearTimeout(btnTimer);
    }
    if (rotate === -120) {
      setComputerOpacity(opacity);
      setScBackground("#000");
      computerTimer = setTimeout(() => {
        setScRotate(rotate);
      }, 1000);
      btnTimer = setTimeout(() => {
        setBtnFlag(!btnFlag);
      }, 500);
    } else {
      setScRotate(rotate);
      btnTimer = setTimeout(() => {
        setBtnFlag(!btnFlag);
      }, 500);
      computerTimer = setTimeout(() => {
        setComputerOpacity(opacity);
        setScBackground("#fff");
      }, 1000);
    }
  };
  return (
    <>
      {/* Lamp */}
      <Card
        title="Mini Lamp"
        bordered={false}
        style={{ width: "160px", marginBottom: 20 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <StyledLab id="lamp" /* isLight={isLight} */>
              <div className="lamp-u">
                <TransitionMotion
                  styles={
                    isLight
                      ? [
                          {
                            key: "lamp",
                            // style: { scale: spring(1) },
                          },
                        ]
                      : []
                  }
                >
                  {(inStyles) =>
                    inStyles[0] ? <div className="light"></div> : null
                  }
                </TransitionMotion>
              </div>
              <div className="lamp-m">
                <Motion style={{ x: spring(lineLength, presets.wobbly) }}>
                  {(interpolatingStyle) => {
                    return (
                      <div
                        id="line"
                        style={{
                          transform: `scaleY(${interpolatingStyle.x})`,
                        }}
                      ></div>
                    );
                  }}
                </Motion>
              </div>
              <div className="lamp-b"></div>
            </StyledLab>
          </div>
          <Switch onChange={handleLamp} style={{ margin: "20px 0 0" }} />
        </div>
      </Card>
      {/* Computer */}
      <Card title="Mini Computer" bordered={false} style={{ width: "160px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <StyledComputerDiv>
              <TransitionMotion
                styles={[
                  {
                    style: {
                      rotate: spring(scRotate),
                    },
                  },
                ]}
              >
                {(inStyles) => {
                  return (
                    <div
                      className="sc"
                      style={{
                        transform: `rotateX(${inStyles[0].style.rotate}deg)`,
                        backgroundColor: scBackground,
                      }}
                    >
                      <div
                        className="camera"
                        style={{
                          opacity: computerOpacity,
                        }}
                      ></div>
                      <div
                        className="windows"
                        style={{
                          opacity: computerOpacity,
                        }}
                      >
                        <div className="wc">
                          <div
                            className="ws"
                            style={{ borderWidth: "0 1px 1px 0" }}
                          ></div>
                          <div
                            className="ws"
                            style={{ borderWidth: "0 0 1px 0" }}
                          ></div>
                          <div
                            className="ws"
                            style={{ borderWidth: "0 1px 0 0" }}
                          ></div>
                          <div
                            className="ws"
                            style={{ borderWidth: "0" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </TransitionMotion>
              <div className="b">
                <div className="c">
                  {[...Array.from({ length: 54 }, (v, i) => i)].map((i) => (
                    <div
                      className={btnFlag ? "btn alive" : "btn"}
                      key={i}
                    ></div>
                  ))}
                  <div
                    className="tb"
                    style={{ borderColor: btnFlag ? "#fff" : "#000" }}
                  ></div>
                </div>
              </div>
            </StyledComputerDiv>
          </div>
          <Switch
            onChange={handleOpenComputer}
            style={{ margin: "20px 0 0" }}
          />
        </div>
      </Card>
    </>
  );
};

export default CSS;
