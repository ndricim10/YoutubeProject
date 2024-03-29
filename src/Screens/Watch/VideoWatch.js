import React from "react";

export default function VideoWatch({ videoId }) {
  return (
    <>
      <div className="watch_video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder={0}
          width="100%"
          title="My Video"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
