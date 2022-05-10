import React, { useState } from "react";

import Button from "./Button";
import Message from "./Message";
import Navbar from "./Navbar";
import ReducerDemo from "./ReducerDemo";
import EffectDemo from "./EffectDemo";
import CustomHookDemo from "./CustomHookDemo";

import AsyncData from "./AsyncData";

export const AppContext = React.createContext({});

const Container = () => {
  const [albumSysID, setAlbumSysID] = useState('1');

  return (
    <React.Fragment>
      <div className="section">
        <label className="title">useState</label>
        <Button />
      </div>

      <div className="section">
        <label className="title">useContext</label>
        <AppContext.Provider value={{username: 'super awesome'}}>
          <Navbar />
          <Message />
        </AppContext.Provider>
      </div>

      <div className="section">
        <label className="title">useReducer</label>
        <ReducerDemo />
      </div>

      <div className="section">
        <label className="title">useEffect</label>
        <EffectDemo albumId={albumSysID} />
      </div>

      <div className="section">
        <label className="title">Custom Hook</label>
        <CustomHookDemo albumId={albumSysID} />
      </div>

      <div className="section">
      <label className="title">Async Data</label>
        <AsyncData />
      </div>
      
    </React.Fragment>
  );
}

export default Container