import React from "react";
import "./Techstacks.scss";
import { SiJavascript, SiHtml5, SiReact, SiSass, SiCss3 } from "react-icons/si";

const Techstacks = () => {
  return (
    <section class="techstack">
      <h1>Tech Stacks</h1>
      <section class="techstack-icons">
        <SiJavascript />
        <SiHtml5 />
        <SiCss3 />
        <SiReact />
        <SiSass />
      </section>
    </section>
  );
};

export default Techstacks;
