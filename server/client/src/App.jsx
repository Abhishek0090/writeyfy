import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./router";

import { useState, useEffect } from "react";



function App() {
  //frontend

  const content = useRoutes(routes);

  if (!content) return 404;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <>
      <div className="App">{content}</div>
    </>
  );
}

export default App;
