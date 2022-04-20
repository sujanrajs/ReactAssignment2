import React from "react";
import "./Scrolldown.scss";
import BouncingArrow from "../../Assets/Images/arrow.svg";

const Scrolldown = () => {
  return (
    <section class="scroll-down">
      <div class="box bounce">
        <img src={BouncingArrow} alt="bouncing arrow" />
      </div>
    </section>
  );
};

export default Scrolldown;
