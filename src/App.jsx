import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Gif from "./components/Gif";
import "./css/style.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Search />
      <Banner />
      <Gif />
    </>
  );
}

export default App;
