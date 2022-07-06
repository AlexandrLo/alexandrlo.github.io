import React, { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

import config from "config";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [app, setApp] = useState(null);
  const [db, setDb] = useState(null);
  const [storage, setStorage] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const newApp = initializeApp(config.firebase);
    const newDb = getDatabase(newApp);
    const newStorage = getStorage(newApp);
    setApp(newApp);
    setDb(newDb);
    setStorage(newStorage);
  }, []);

  useEffect(() => {
    if (db) {
      const rootRef = ref(db, "/public");
      onValue(rootRef, (snapshot) => {
        setPortfolioData(snapshot.val());
      });
    }
  }, [db]);

  return (
    <DataContext.Provider value={{ app, db, storage, portfolioData }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
