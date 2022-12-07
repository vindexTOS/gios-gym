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
import Dumbbells from "./components/product/categorys/Dumbbells.jsx";
import Navigation from "./components/side_navigation/Navigation";
import Product from "./components/product/Product";
import Weights from "./components/product/categorys/Weights";
import Gymnastics from "./components/product/categorys/Gymnastics";
import Barbells from "./components/product/categorys/Barbells";
import Machines from "./components/product/categorys/Machines";
import Racks from "./components/product/categorys/Racks"
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
    { eng: "All Product", geo: "ყველა პროდუქტი", type: "all", link:"/" },
    { eng: "Weights", geo: "წონები", type: "weights",link:"/weights"},
    {
      eng: "Barbell",
      geo: "ღერძი",
      type: "barbells",
      link:"/barbells"
    },
    {
      eng: "Dumbbells",
      geo: "ჰანტელი",
      type: "dumbbells",
      link:"/dumbbells"
    },
    { eng: "Machines", geo: "ტრენაჟორი", type: "machines" ,link:"/machines"},
    { eng: "Racks", geo: "რაკი", type: "racks" ,link:"/racks"},
    { eng: "Gymnastic", geo: "გიმასტიკეიბ", type: "gymnastic",link:"/gymnastics" },
  ];

  
  //data /////////////////////////
  return (
    <BrowserRouter>
      <SearchContext.Provider
        value={{
          loading,
          types,
        
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
      <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:products/:productId'   element={<SingleProduct />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shippinginfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<Test />} />
          <Route path="/succsess" element={<Succsess />} />
          <Route path="/weights" element={<Weights/>}/>
          <Route path="/barbells" element={<Barbells/>} />
          <Route path="/dumbbells" element={<Dumbbells/>}/>
          <Route path="/machines" element={<Machines/>} />
          <Route path="/racks" element={<Racks/>}/>

          <Route path="/gymnastics" element={<Gymnastics/>}/>
        </Routes>
      </SearchContext.Provider>
      < Footer/> 

    </BrowserRouter>
  );
}

export default App;
