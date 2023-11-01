import { useState } from "react";
import "./App.css";
import Home from "./pages/components/Home";
import Cart from "./pages/components/Counter";
import Checkout from "./pages/components/Checkout";
import Layout from "./pages/shared/Layout";
import SectionTambahMobil from "./pages/components/SectionTambahMobil";
import ListEmoji from "./pages/components/ListEmoji";

function App() {
  const [count] = useState(110);
  const [title] = useState("ah siap");
  const [list] = useState(["✈️", "🏠", "👨‍💻"]);
  const [listObj] = useState([
    { name: "plane", icon: "✈️" },
    { name: "home", icon: "🏠" },
    { name: "code", icon: "👨‍💻" },
  ]);
  const [objPerson] = useState({
    name: "kemal",
    car: "lambo",
    age: 30,
  });

  const [TambahMobil, setTambahMobil] = useState(0);

  const handleGetCars = (val: string) => {
    console.log("get car" + val);
  };

  return (
    <Layout title="layout title">
      <Home count={count} title={title} />
      <Cart />
      <Checkout />
      <h1>tambah mobil {TambahMobil}</h1>
      <SectionTambahMobil setTambahMobil={setTambahMobil} />
      <ListEmoji
        list={list}
        listObj={listObj}
        objPerson={objPerson}
        handleGetCars={handleGetCars}
      />
    </Layout>
  );
}

export default App;
