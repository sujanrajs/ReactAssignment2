import React from "react";
import "./Contactus.scss";
import "../../Components/Button/Button";
import Button from "../../Components/Button/Button";

const Contactus = () => {
  return (
    <section class="contactus">
      <h1>Contact us</h1>
      <form>
        <input type="text" name="name" placeholder="Name..." />
        <input type="text" name="email" placeholder="Email..." />
        <textarea name="textarea" placeholder="Messages"></textarea>
      </form>
      <Button label="Submit" />
    </section>
  );
};

export default Contactus;
