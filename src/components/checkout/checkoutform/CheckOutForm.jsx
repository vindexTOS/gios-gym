import React from "react";
import Order from "./Order";
import countries from "./countries.json";
export default function CheckOutForm({ items }) {
  const [countryData, setCountryData] = React.useState(countries);
  return (
    <form>
      <div className="flex flex-row  ml-5 mt-5 w-[100wh]">
        {/*Main Div */}

        <div className="flex flex-col gap-5 items-start justify-start w-[50%]">
          {/*billing detals */}

          <div className="flex flex-row gap-5">
            {/*first and last name Div*/}
            <span className="flex flex-col">
              <label htmlFor="name">First Name</label>
              <input id="name" type="text" placeholder="first name" />{" "}
            </span>
            <span className="flex flex-col">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" placeholder="last name" />{" "}
            </span>
            {/*first and last name Div*/}
          </div>
          <span className="flex flex-col">
            <label>Company name</label>
            <input className="w-[200%]" type="text" placeholder="Optional" />
          </span>
          <div className="flex flex-row gap-5">
            {/*contact and personal info */}

            <span className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="email" />
            </span>
            <span className="flex flex-col">
              <label htmlFor="">Phone number</label>
              <input id="email" placeholder="phone" />
            </span>
            {/*contact and personal info */}
          </div>
          <div>
            {/*Country Address info*/}
            <select>
              {countryData.map((country) => {
                const { name, code } = country;
                return <option key={code}>{name}</option>;
              })}
            </select>
            <div className="mt-5 flex flex-col gap-5">
              {/*address */}
              <label>Address</label>
              <input type="text" placeholder="address-1" />
              <input type="text" placeholder="address-2" />
            </div>
            <div className="flex flex-col mt-5">
              {/*state/provinc/city/town*/}
              <label>Town/City</label>
              <input type="text" placeholder="Town/City" />
              <div className="flex flex-row gap-5">
                <span className="flex flex-col gap-5">
                  <label>province/state</label>
                  <input type="text" placehodler="province/state" />
                </span>
                <span className="flex flex-col gap-5">
                  <label>Postcod/ZIP</label>
                  <input type="text" placeholder="postcode/zip" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-[2px] bg-red-600"></div>
        <Order items={items} />
      </div>
    </form>
  );
}
