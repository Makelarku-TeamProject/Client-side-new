import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import AppRouter from "./routes/router";

const App = () => {
  return (
    <GlobalContextProvider>
      <AuthProvider>
        <DataProvider>
          <AppRouter />
        </DataProvider>
        <ToastContainer />
      </AuthProvider>
    </GlobalContextProvider>
  );
};
export default App;
