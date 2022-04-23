import React from "react";
import { ReactComponent as YourSvg } from "../../Assets/Images/intro_image.svg";
import "./Introduction.scss";

const Introduction = () => {
  return (
    <section class="introduction">
      <article>
        <h1>Hello !!</h1>
        <p>
          A warm welcome to my Portfolio. My full name is Sujan Raj Shrestha.
          You can call me Sujan. I am student at Integrify, Helsinki Finland.
          Please feel free to explore my portfolio. &#128512;
        </p>
      </article>
      <figure>
        <YourSvg />
      </figure>
    </section>
  );
};

export default Introduction;
