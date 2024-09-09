import React, { ReactNode } from "react";
import { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
export const ToastContext = createContext({
  toast: toast,
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};
