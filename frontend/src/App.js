import { Container } from "react-bootstrap";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
