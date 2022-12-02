import React from "react";
import Order from "./Order";
import countries from "./countries.json";
import { useForm } from "react-hook-form";

export default function CheckOutForm({ items, handleRemove }) {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = React.useState([]);

  const onSubmit = (data) => {
    formData.push(data);
    formData.push(items);

    console.log(formData);
  };
  const [countryData, setCountryData] = React.useState(countries);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Billing Info</h1>

      <div className="flex flex-row  ml-5 mt-5 w-[100wh]">
        {/*Main Div */}
        <div className="flex flex-col gap-5 items-start justify-start w-[50%]">
          {/*billing detals */}

          <div className="flex flex-row gap-5">
            {/*first and last name Div*/}
            <span className="flex flex-col">
              <label htmlFor="name">First Name</label>
              <input
                id="name"
                type="text"
                placeholder="first name"
                {...register("name")}
              />{" "}
            </span>
            <span className="flex flex-col">
              <label htmlFor="last">Last Name</label>
              <input
                id="last"
                type="text"
                placeholder="last name"
                {...register("last")}
              />{" "}
            </span>
            {/*first and last name Div*/}
          </div>
          <span className="flex flex-col">
            <label>Company name</label>
            <input
              className="w-[200%]"
              type="text"
              placeholder="Optional"
              {...register("company")}
            />
          </span>
          <div className="flex flex-row gap-5">
            {/*contact and personal info */}

            <span className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="email"
                {...register("email")}
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="">Phone number</label>
              <input
                id="phone"
                type="text"
                placeholder="phone"
                {...register("phone")}
              />
            </span>
            {/*contact and personal info */}
          </div>
          <div>
            {/*Country Address info*/}
            <select {...register("country")}>
              {countryData.map((country) => {
                const { name, code } = country;
                return <option key={code}>{name}</option>;
              })}
            </select>
            <div className="mt-5 flex flex-col gap-5">
              {/*address */}
              <label>Address</label>
              <input
                type="text"
                placeholder="address-1"
                {...register("address-1")}
              />
              <input
                type="text"
                placeholder="address-2"
                {...register("address-2")}
              />
            </div>
            <div className="flex flex-col mt-5">
              {/*state/provinc/city/town*/}
              <label>Town/City</label>
              <input
                type="text"
                placeholder="Town/City"
                {...register("town")}
              />
              <div className="flex flex-row gap-5">
                <span className="flex flex-col gap-5">
                  <label>province/state</label>
                  <input
                    type="text"
                    placehodler="province/state"
                    {...register("state")}
                  />
                </span>
                <span className="flex flex-col gap-5">
                  <label>Postcod/ZIP</label>
                  <input
                    type="text"
                    placeholder="postcode/zip"
                    {...register("ZIP")}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <Order items={items} handleRemove={handleRemove} />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
