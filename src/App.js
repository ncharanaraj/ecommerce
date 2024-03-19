import React from "react";
import Header from "./components/Header";
import PromoHeader from "./components/PromoHeader";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <AuthProvider>
      <header>
        <Header />
        <PromoHeader />
      </header>
      <main className="flex justify-center">
        <div className="w-[576px]  border rounded-[20px] mt-10 p-6 flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </main>
    </AuthProvider>
  );
};

export default App;
