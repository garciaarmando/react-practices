import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import { Message } from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: The song "${search.song}" doesn't exist `}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric />
      )}

      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error: The interpreter "${search.artist}" doesn't exist`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
