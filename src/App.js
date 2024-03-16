import React from "react";
import Header from "./components/Header";
import PromoHeader from "./components/PromoHeader";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <header>
        <Header />
        <PromoHeader />
      </header>
      <main className="flex justify-center">
        <Form />
      </main>
    </>
  );
};

export default App;
