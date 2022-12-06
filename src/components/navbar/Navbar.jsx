import React, { useContext, useRef } from "react";
import { FaShippingFast, FaCartPlus } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { SearchContext } from "../context";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useCart } from "../checkout/Cart";
import Cart from "../checkout/Cart";
export default function Navbar() {
  const items = useCart();

  const inputRef = useRef(null);

  const { lang, setLang, search, setSearch, navFilter, card } =
    useContext(SearchContext);
  const [searchBar, setSearchBar] = React.useState(false);
  const [inputSearch, setInputSearch] = React.useState("");
  const searchRefClick = () => {
    inputRef.current.focus();
   
      setSearch(inputRef.current.value);
      console.log("AHAH")
    
   
  };
  return (
    <nav
      className="w-[100vw] h-[80px] bg-[#F9F6EE] flex items-center  justify-evenly "
      style={{
        boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
        color: "red",
        borderBottom: "1px solid gray",
      }}
    >
      {" "}
      <div className="max_xl:justify-start max_xl:w-[100vw]  ">
        <Link style={{ cursor: "pointer" }} to="/">
          <div
          style={{backgroundColor:"hsla(37, 89%, 52%, 0.8)"}}
            className={
              searchBar
                ? "hidden"
                : "  max_xl:ml-[2rem]  ml-[40px] logo flex items-center justify-center  w-[120px] h-[33px] rounded-[30px] font-bold "
            }
          >
            <h1 className="bg-white w-[80px] h-[24px] text-center flex items-center justify-center rounded-[30px]   ">
              <span style={{color:"hsla(37, 89%, 52%, 1)"}}>giosgym</span>
            </h1>
            <span style={{ color: "white" }} className="mb-1 ml-[2px]">
              .ge
            </span>
          </div>{" "}
        </Link>
      </div>
      {!searchBar && (
        <div
          onClick={() => setSearchBar(!searchBar)}
        
          className="xl:hidden   lg:hidden flex items-center justify-center w-[25px] h-[25px] rounded-[50%]  hover:bg-gray-300  cursor-pointer text-[1.2rem]"
        >
          <CiSearch />
        </div>
      )}
      <div
        className={
          !searchBar
            ? "border-[1px] max_lg:hidden flex items-center  justify-center w-[100%] h-[33px] rounded-[30px]  ml-[30px] "
            : `border-[1px] xl:hidden     absolute bg-white lg:hidden flex items-center justify-center w-[50%]  mr-[10rem]    h-[33px] rounded-[30px]`
        }
      >
        <input
          style={{
            outline: "none",
            background:"none",
             fontSize: "12px",
            fontWeight: "bold",
            color:"black"
          }}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          ref={inputRef}
          className=" w-[100%] ml-5 "
          placeholder="
          giosgym"
        />
        {inputSearch.length > 0 && (
          <div
            style={{
              boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
              borderRadius: "10px",
            }}
            className=" h-[10rem] w-[70%] absolute	overflow-y-auto bg-[#F9F6EE] mt-[13rem] z-30   "
          >
            {navFilter
              .filter((val) => {
                if (val === "") {
                  return val;
                } else if (
                  val.title
                    .toLowerCase()

                    .includes(inputSearch.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <Link key={item.id} to={`/${item.id}`}>
                    <p style={{color:"black"}}>{item.title}</p>
                  </Link>
                );
              })}
          </div>
        )}

        <span className="w-[0.6px] h-[70%] bg-gray-300 mr-[10px]"></span>
        
        <a
          title="ძიება"
          style={{color:"hsla(37, 89%, 52%, 1)"}}
          className=" flex items-center justify-center w-[25px] h-[25px] rounded-[50%]  hover:bg-gray-300  cursor-pointer"
        >
          <CiSearch onClick={searchRefClick} />
        </a>
      </div>
      <div
        className={
          searchBar
            ? "max_sm:ml-[18rem] icon-wrapper flex  p-0  text-[1rem] mr-20"
            : "icon-wrapper flex gap-3 p-0  text-[1.2rem] mr-20  "
        }
        style={{ color: "gray" }}
      >
        <Link
          to="/"
          className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%]  hover:bg-gray-300  cursor-pointer "
        >
          <AiOutlineHome />
        </Link>
        <Link
          to="/contact"
          title={lang ? "კონტაქტი" : "Contact"}
          className=" flex items-center justify-center w-[30px] h-[30px] rounded-[50%]  hover:bg-gray-300  cursor-pointer"
        >
          <BiMessageRoundedDetail />
        </Link>
        <Link
          to={"/shipping"}
          title={lang ? "მიწოდება" : "Shipping"}
          className=" flex items-center justify-center  w-[30px] h-[30px] rounded-[50%]  hover:bg-gray-300  cursor-pointer"
        >
          <FaShippingFast />
        </Link>
        <Link
          to="/cart"
          title={lang ? "კალათა" : "Cart"}
          className=" flex items-center justify-center  w-[30px] h-[30px] rounded-[50%] hover:bg-gray-300  cursor-pointer"
        >
          <FaCartPlus />{" "}
          {items.length > 0 && (
            <div
              className=" flex items-center justify-center bg-red-400 w-[12px] h-[12px] rounded-[50%] absolute mb-[20px] ml-[20px] "
              style={{ fontSize: "10px", color: "white" }}
            >
              {items.length}
            </div>
          )}
        </Link>
        <button onClick={() => setLang(!lang)}>{lang ? "GEO" : "ENG"}</button>
      </div>
    </nav>
  );
}
