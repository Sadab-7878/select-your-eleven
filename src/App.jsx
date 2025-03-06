import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aplayers from "./components/Aplayers/Aplayers";

function App() {
  const [increasemoney, setIncreasemoney] = useState(0);

  const claimmoney = () => {
    const amount = increasemoney + 6000000;

    setIncreasemoney(amount);
  };
  return (
    <>
      <Header increasemoney={increasemoney} />
      <Hero claimmoney={claimmoney} />
      <Aplayers />
    </>
  );
}

export default App;
