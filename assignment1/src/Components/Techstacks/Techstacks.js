import React from "react";
import { SiJavascript, SiHtml5, SiReact, SiSass, SiCss3 } from "react-icons/si";
import "./Techstacks.scss";

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
