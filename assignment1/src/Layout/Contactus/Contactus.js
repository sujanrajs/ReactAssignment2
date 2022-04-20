import React from "react";
import "./Contactus.scss";

const Contactus = () => {
  return (
    <section class="contactus">
      <h1>Contact us</h1>
      <form>
        <input type="text" name="name" placeholder="Name..." />
        <input type="text" name="email" placeholder="Email..." />
        <textarea name="textarea" placeholder="Messages"></textarea>
      </form>
      <button class="btn">Submit!</button>
    </section>
  );
};

export default Contactus;
