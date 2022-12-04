import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact";
import React, { useState } from "react";
import { SearchContext } from "./components/context";
import SingleProduct from "./components/product/SIngleProduct";
import Cart from "./components/checkout/Cart";
import Test from "./components/test/test";
import { db } from "./firebase-config";
import Shippinginfo from "./components/Shippinginfo";
import { collection, getDocs } from "firebase/firestore";
import Succsess from "./components/checkout/checkoutform/Succsess";
import Footer from "./components/Footer"

function App() {
  const [lang, setLang] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [search, setSearch] = useState("");
  const [card, setCard] = useState([]);

  const equpmentCollection = collection(db, "equpment");
  // data //////////////////////////////////////////////////////////////////////////
  const [data, setData] = useState([]);

  const [navFilter, setNavFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    const getEqupment = async () => {
      const data = await getDocs(equpmentCollection);
      console.log(data);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEqupment();
  }, []);

  React.useEffect(() => {
    setNavFilter(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, [data]);

  const types = [
    { eng: "All Product", geo: "ყველა პროდუქტი", type: "all" },
    { eng: "Weights", geo: "წონები", type: "weights" },
    {
      eng: "Barbell",
      geo: "ღერძი",
      type: "barbells",
    },
    {
      eng: "Dumbbells",
      geo: "ჰანტელი",
      type: "dumbbells",
    },
    { eng: "Machines", geo: "ტრენაჟორი", type: "machines" },
    { eng: "Racks", geo: "რაკი", type: "racks" },
    { eng: "Gymnastic", geo: "გიმასტიკეიბ", type: "gymnastic" },
  ];

  const categoryClick = (type) => {
    let newArry = data;
    newArry = newArry.filter((val) => {
      if (type === "all") {
        console.log(val.type);
        return val;
      } else if (val.type === type) {
        console.log(type);
        return val;
      }
    });
    setNavFilter(newArry);
  };
  //data /////////////////////////
  return (
    <BrowserRouter>
      <SearchContext.Provider
        value={{
          loading,
          types,
          categoryClick,
          navFilter,
          lang,
          setLang,
          search,
          setSearch,
          searchButton,
          setSearchButton,
          card,
          setCard,
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shippinginfo />} />
          <Route path="/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<Test />} />
          <Route path="/succsess" element={<Succsess />} />
        </Routes>
        < Footer/>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
