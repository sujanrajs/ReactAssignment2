import React from "react";
import "./Blogs.scss";
import HtmlImage from "../../Assets/Images/img-1.jpg";
import CssImage from "../../Assets/Images/img-2.jpg";
import JsImage from "../../Assets/Images/img-3.jpg";

const Blogs = () => {
  return (
    <section class="blogs">
      <h1>Blogs</h1>
      <section class="blog1">
        <figure>
          <img src={HtmlImage} alt="image" />
        </figure>
        <article>
          <h2>HTML Blog</h2>
          <h3>A skeleton website</h3>
          <p>
            HTML (HyperText Markup Language) is the most basic building block of
            the Web. It defines the meaning and structure of web content. Other
            technologies besides HTML are generally used to describe a web
            page's appearance/presentation (CSS) or functionality/behavior
            (JavaScript). "Hypertext" refers to links that connect web pages to
            one another, either within a single website or between websites.
            Links are a fundamental aspect of the Web. By uploading content to
            the Internet and linking it to pages created by other people, you
            become an active participant in the World Wide Web.
          </p>
          <a href="#" target="_blank">
            Read More..
          </a>
        </article>
      </section>
      <section class="blog2">
        <figure>
          <img src={CssImage} alt="image" />
        </figure>
        <article>
          <h2>CSS Blog</h2>
          <h3>A pretty webapp</h3>
          <p>
            Cascading Style Sheets (CSS) is a stylesheet language used to
            describe the presentation of a document written in HTML or XML
            (including XML dialects such as SVG, MathML or XHTML). CSS describes
            how elements should be rendered on screen, on paper, in speech, or
            on other media. CSS is among the core languages of the open web and
            is standardized across Web browsers according to W3C specifications.
            Previously, development of various parts of CSS specification was
            done synchronously, which allowed versioning of the latest
            recommendations. You might have heard about CSS1, CSS2.1, CSS3.
            However, CSS4 has never become an official version.
          </p>
          <a href="#" target="_blank">
            Read More..
          </a>
        </article>
      </section>
      <section class="blog3">
        <figure>
          <img src={JsImage} alt="image" />
        </figure>
        <article>
          <h2>JS Blog</h2>
          <h3>A functional webapp</h3>
          <p>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions. While it
            is most well-known as the scripting language for Web pages, many
            non-browser environments also use it, such as Node.js, Apache
            CouchDB and Adobe Acrobat. JavaScript is a prototype-based,
            multi-paradigm, single-threaded, dynamic language, supporting
            object-oriented, imperative, and declarative (e.g. functional
            programming) styles. Read more about JavaScript. This section is
            dedicated to the JavaScript language itself, and not the parts that
            are specific to Web pages or other host environments. For
            information about API specifics to Web pages, please see Web APIs
            and DOM.
          </p>
          <a href="#" target="_blank">
            Read More..
          </a>
        </article>
      </section>
    </section>
  );
};

export default Blogs;
