import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <img
        src="../assets/avatar.png"
        alt="Artist Portrait"
        className="artist-image"
      />
      <div className="artist-description">
        <h2>Welcome to O_I's Portfolio</h2>
        {/* <p>
          O_I's signature style is marked by its ethereal synths, fluid
          transitions, and a delicate balance of sonic textures that are both
          calming and invigorating. Inspired by the ebb and flow of nature and
          the universe's intricate patterns, O_I crafts soundscapes that
          resonate with the soul, evoking emotions that linger long after the
          music has faded.
        </p> */}
      </div>
    </section>
  );
}

export default Home;
