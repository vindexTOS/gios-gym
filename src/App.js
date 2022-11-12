import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import data from "./data/data";
import Contact from "./components/contact";
import React from "react";
import { SearchContext } from "./components/context";
import SingleProduct from "./components/product/SIngleProduct";
import uuid from "react-uuid";

function App() {
  const [navFilter, setNavFilter] = React.useState(data);
  const [lang, setLang] = React.useState(false);
  const [searchButton, setSearchButton] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const clickFilter = (type) => {
    let newList = [...data];

    newList = newList.filter((item) => {
      if (type === item.type) {
        return item.type;
      } else if (type === "all") {
        return data;
      }
    });
    setNavFilter(newList);
    console.log(newList);
  };

  return (
    <BrowserRouter>
      <SearchContext.Provider
        value={{
          navFilter,
          clickFilter,
          lang,
          setLang,
          search,
          setSearch,
          searchButton,
          setSearchButton,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
