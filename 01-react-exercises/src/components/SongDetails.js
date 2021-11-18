import React from "react";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h2>Details</h2>
      <SongArtist />
      <SongLyrics />
    </div>
  );
};

export default SongDetails;
