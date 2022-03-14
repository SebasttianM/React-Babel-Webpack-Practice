import React, { Component } from "react";
import styled from "styled-components";
import { Spaf } from "../style/StyledComponents";
const Scontainer = styled.div`
  background-color: black;
  text-aling: center;
`;
const Sh2 = styled.h2`
  color: red;
  font-family: comic-sans;
  font-size: x-large;
`;
class Component2 extends Component {
  render() {
    return (
      <Scontainer>
        <Sh2>Here you'll find some of my personal projects</Sh2>
        <img
          src=""
          alt=""
          srcset="https://i.pinimg.com/474x/f9/e3/c7/f9e3c74ba77cf654f1a96d4469d133a1.jpg"
        />
        <div>
          <Spaf>
            <p>
              👋 Hi, I’m @SebasttianM 👀 I’m interested in music, audiovisual
              and coding 🌱 I’m currently learning about Coding, Databases and
              some other topics related to technology 🤘 I’m looking to
              collaborate on some proyects in order to learn more of coding and
              collaborative work as well 📫 You´ll contact me by my personal
              email: sebasttianvmarin@gmail.com
            </p>
          </Spaf>
        </div>
      </Scontainer>
    );
  }
}
export default Component2;
