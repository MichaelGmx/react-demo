import React, { useEffect, useState } from 'react';

import axios from 'axios';

const AsyncData = () => {
  const [data, setData] = useState({ hits: [] });

  const fetchData = async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=react%20tutorial',
    );

    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item =>
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      )}
    </ul>
  );
}

export default AsyncData