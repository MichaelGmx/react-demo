import React from 'react';

import useCustomHook from './useCustomHook';

const CustomHookDemo = ({ albumId }) => {
  const [loading, albums] = useCustomHook(albumId);

  if (loading === true) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {albums.map((album, index) =>
        <li key={index}>{album.title}</li>
      )}
    </ul>
  );
}

export default CustomHookDemo