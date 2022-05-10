import React, { useEffect, useState } from 'react';

const EffectDemo = ({ albumId }) => {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/user/${albumId}/albums`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setLoading(false);
      });
  }, [albumId]);

  if (loading === true) {
    return <p>Loading...</p>
  }

  return (
    <ol>
      {albums.map((album, index) =>
        <li key={index}>{album.title}</li>
      )}
    </ol>
  );
}

export default EffectDemo