import React from "react";
import BouncingArrow from "../../Assets/Images/arrow.svg";
import "./Scrolldown.scss";

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
