import React, { useEffect, useState } from 'react';
import YoutubeService from '../services/YoutubeService';

export default function (props) {
  const [trailerId, setTrailerId] = useState(null);
  useEffect(() => {
    YoutubeService.getTrailer(props.title)
      .then((response) => {
        console.log(response.data.items[0].id.videoId);
        setTrailerId(response.data.items[0].id.videoId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {trailerId !== null && (
        <a href={`https://www.youtube.com/watch?v=${trailerId}`}>
          Click here to watch the trailer...
        </a>
      )}
    </div>
  );
}
