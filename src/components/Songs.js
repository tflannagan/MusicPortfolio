import React from "react";
import "./Songs.css";

export default function Songs() {
  return (
    <section id="songs" className="songs-section">
      <h2 className="songs-title">Featured Songs</h2>

      <div className="song">
        <iframe
          width="100%"
          title="OI"
          height="300"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1494906409&color=%232f444b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>

      <div className="song">
        <iframe
          width="100%"
          title="OI"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1495800820&color=%232f444b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>

      <div className="song">
        <iframe
          width="100%"
          title="OI"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1494911452&color=%232f444b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>

      {/* <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1494911452&color=%232f444b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a
          href="https://soundcloud.com/igniculus_o"
          title="O_I"
          target="_blank"
          style="color: #cccccc; text-decoration: none;"
        >
          O_I
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/igniculus_o/continuum"
          title="Continuum"
          target="_blank"
          style="color: #cccccc; text-decoration: none;"
        >
          Continuum
        </a>
      </div> */}
    </section>
  );
}
