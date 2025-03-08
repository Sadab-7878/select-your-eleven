import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aplayers from "./components/Aplayers/Aplayers";

function App() {
  const [increasemoney, setIncreasemoney] = useState(0);

  const claimmoney = () => {
    setIncreasemoney((prevMoney) => prevMoney + 6000000);
  };

  return (
    <>
      <Header increasemoney={increasemoney} />
      <Hero claimmoney={claimmoney} />
      <Aplayers
        increasemoney={increasemoney}
        setIncreasemoney={setIncreasemoney}
      />
    </>
  );
}

export default App;
