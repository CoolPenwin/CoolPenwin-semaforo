import React from "react";

//include images into your bundle
import { Semaforo, Peatons } from "./semaforo";
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <>
      <div class="d-flex justify-content-between m-3">
        <Semaforo />
        <Semaforo />
      </div>
      <div class="d-flex justify-content-between m-3">
        <Peatons />
        <Peatons />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
