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

      <div className="song">
        <iframe
          width="100%"
          title="OI"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1505603623%3Fsecret_token%3Ds-jfQ76koeoVb&color=%232f444b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </section>
  );
}
