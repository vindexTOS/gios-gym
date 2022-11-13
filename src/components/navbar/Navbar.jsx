import React, { useContext } from "react";
import { FaShippingFast, FaCartPlus } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { SearchContext } from "../context";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { lang, setLang, search, setSearch, navFilter } =
    useContext(SearchContext);
  const [searchBar, setSearchBar] = React.useState(false);
  return (
    <nav
      className="w-[100vw] h-[80px] bg-[#F9F6EE] flex items-center justify-evenly "
      style={{
        boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
        color: "red",
        borderBottom: "1px solid gray",
      }}
    >
      <Link style={{ cursor: "pointer" }} to="/">
        {" "}
        <div className="max_xl:justify-start max_xl:w-[100vw]  ">
          <div className="    ml-[40px] logo flex items-center justify-center  bg-[#FF0000] w-[120px] h-[33px] rounded-[30px] font-bold ">
            <h1 className="bg-white w-[80px] h-[25px] text-center flex items-center justify-center rounded-[30px]   ">
              <span className="mb-1">giosgym</span>
            </h1>
            <span style={{ color: "white" }} className="mb-1 ml-[2px]">
              .ge
            </span>
          </div>
        </div>
      </Link>
      {!searchBar && (
        <div
          onClick={() => setSearchBar(true)}
          className="xl:hidden   lg:hidden flex items-center justify-center w-[25px] h-[25px] rounded-[50%]  hover:bg-gray-300  cursor-pointer text-[1.2rem]"
        >
          <CiSearch />
        </div>
      )}
      {searchBar && (
        <div className="border-[1px] xl:hidden	lg:hidden flex items-center justify-center w-[100%]  h-[33px] rounded-[30px] ">
          <input
            style={{
              outline: "none",
              background: "none",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            className="w-[100%] "
            placeholder="
          giosgym"
          />
          <span className="w-[0.6px] h-[70%] bg-gray-300 mr-[5px]"></span>
          <a className=" flex items-center justify-center w-[25px] h-[25px] rounded-[50%]  hover:bg-gray-300  cursor-pointer">
            <CiSearch />
          </a>
        </div>
      )}
      <div className="border-[1px] max_lg:hidden	flex items-center justify-center w-[90%] h-[33px] rounded-[30px]  ml-[30px] ">
        <input
          style={{
            outline: "none",
            background: "none",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-[100%] ml-5 "
          placeholder="
          giosgym"
        />

        <span className="w-[0.6px] h-[70%] bg-gray-300 mr-[10px]"></span>
        <a
          title="ძიება"
          className=" flex items-center justify-center w-[25px] h-[25px] rounded-[50%]  hover:bg-gray-300  cursor-pointer"
        >
          <CiSearch />
        </a>

        {search.length > 0 && (
          <div
            style={{
              boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
              borderRadius: "10px",
            }}
            className=" h-[10rem] w-[19rem] absolute  mr-[43%]     truncate	  overflow-y-auto bg-[#F9F6EE] mt-[13rem] z-30   "
          >
            {navFilter
              .filter((val) => {
                if (val === "") {
                  return val;
                } else if (
                  val.title
                    .toLowerCase()

                    .includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <Link to={`/product/${item.id}`}>
                    <p key={item.id}>{item.title}</p>
                  </Link>
                );
              })}
          </div>
        )}
      </div>

      <div
        className="icon-wrapper flex gap-3 p-0  text-[1.2rem] mr-20   "
        style={{ color: "gray" }}
      >
        <Link
          to="/contact"
          title={lang ? "კონტაქტი" : "Contact"}
          className=" flex items-center justify-center w-[30px] h-[30px] rounded-[50%]  hover:bg-gray-300  cursor-pointer"
        >
          <BiMessageRoundedDetail />
        </Link>
        <a
          title={lang ? "მიწოდება" : "Shipping"}
          className=" flex items-center justify-center  w-[30px] h-[30px] rounded-[50%]  hover:bg-gray-300  cursor-pointer"
        >
          <FaShippingFast />
        </a>
        <Link
          to="/cart"
          title={lang ? "კალათა" : "Cart"}
          className=" flex items-center justify-center  w-[30px] h-[30px] rounded-[50%] hover:bg-gray-300  cursor-pointer"
        >
          <FaCartPlus />
        </Link>
        <button onClick={() => setLang(!lang)}>{lang ? "GEO" : "ENG"}</button>
      </div>
    </nav>
  );
}
