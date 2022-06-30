import React, { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

import config from "config";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const app = initializeApp(config.firebase);
    const db = getDatabase(app);

    const rootRef = ref(db, "/");
    onValue(rootRef, (snapshot) => {
      setPortfolioData(snapshot.val());
    });
  }, []);

  return (
    <DataContext.Provider value={{ portfolioData }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
