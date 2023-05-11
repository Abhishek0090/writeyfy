import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(localStorage.getItem("modal") || null);

  const toggle = () => {
    setModal(!modal);
    localStorage.setItem("modal", modal);
  };

  return (
    <ModalContext.Provider value={{ modal, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
