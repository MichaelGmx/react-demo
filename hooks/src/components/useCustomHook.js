import { useEffect, useState } from 'react';

const useCustomHook = albumId => {
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

  return [loading, albums];
}

export default useCustomHook