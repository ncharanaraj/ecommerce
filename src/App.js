import React from "react";
import Header from "./components/Header";
import PromoHeader from "./components/PromoHeader";
import Form from "./components/Form";
import Verify from "./components/Verify";

const App = () => {
  return (
    <>
      <header>
        <Header />
        <PromoHeader />
      </header>
      <main className="flex justify-center">
        <div className="w-[576px]  border rounded-[20px] mt-10 p-6 flex flex-col items-center justify-center">
          <Form />
          <Verify />
        </div>
      </main>
    </>
  );
};

export default App;
