import React, { useContext } from 'react';

import { AppContext } from './Container';

const Navbar = () => {
  const { username } = useContext(AppContext);

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}

export default Navbar