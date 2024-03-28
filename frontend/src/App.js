import { Container } from "react-bootstrap";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
