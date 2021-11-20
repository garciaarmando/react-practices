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
          msg={`Error: The song <em>"${search.song}"</em> doesn't exist `}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {bio.artists ? (
        // name,img,birth,country,gender,website,bio
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: The interpreter <em>"${search.artist}"</em> doesn't exist`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
