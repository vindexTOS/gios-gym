import React from "react";
import Order from "./Order";
import countries from "./countries.json";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
//import { db } from "../../../firebase-config";
//import { collection, addDoc } from "firebase/firestore";

export default function CheckOutForm({ items, handleRemove, handleClear }) {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = React.useState([]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    formData.push(data);
    formData.push(items);
    navigate("/succsess");
    handleClear();

    console.log(formData);
  };
  const [countryData, setCountryData] = React.useState(countries);

  //const orderCollection = collection(db, "order");

  /* const createOrder = async (data) => {
    await addDoc(orderCollection, { data });
  };*/

  return (
    <section className="flex flex-row justify-between gap-5 max_sm:flex-col max_sm:flow-x-hidden">
      <form
        style={{ backgroundColor:"white",sboxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)" }}
        className="billing-forms flex flex-col items-center justify-center  m-5 gap-5 bg-gray-300   bg-opacity-60	 rounded-[10px] w-[50%] max_sm:w-[90%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Billing Info</h1>

        <div className="flex flex-row  ml-5 mt-5 w-[100wh]">
          {/*Main Div */}
          <div className="flex flex-col gap-5 items-start justify-start w-[50%]">
            {/*billing detals */}

            <div className="flex flex-row gap-5">
              {/*first and last name Div*/}
              <span className="flex flex-col">
                 <input
                  id="name"
                  type="text"
                  placeholder="First Name"
                  {...register("name")}
                />{" "}
              </span>
              <span className="flex flex-col">
                 <input
                  id="last"
                  type="text"
                  placeholder="Last Name"
                  {...register("last")}
                />{" "}
              </span>
              {/*first and last name Div*/}
            </div>
            <span className="flex flex-col">
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
                 <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
              </span>
              <span className="flex flex-col">
                 <input
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  {...register("phone")}
                />
              </span>
              {/*contact and personal info */}
            </div>
            <div>
              {/*Country Address info*/}
              <div className="flex flex-col">
                <label>Country</label>
                <select className="max_sm:w-[7rem]" {...register("country")}>
                  {countryData.map((country) => {
                    const { name, code } = country;
                    return <option key={code}>{name}</option>;
                  })}
                </select>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                {/*address */}
                 <input
                  type="text"
                  placeholder="Address-1"
                  {...register("address-1")}
                />
                <input
                  type="text"
                  placeholder="Address-2"
                  {...register("address-2")}
                />
              </div>
              <div className="flex flex-col mt-5">
                {/*state/provinc/city/town*/}
                 <input
                  type="text"
                  placeholder="Town/City"
                  {...register("town")}
                />
                <div className="flex flex-row gap-5 mt-5">
                  <span className="flex flex-col gap-5">
                     <input
                      type="text"
                      placeholder="Province/State"
                      {...register("state")}
                    />
                  </span>
                  <span className="flex flex-col gap-5">
                     <input
                      type="text"
                      placeholder="Postcode/Zip"
                      {...register("ZIP")}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.button
          whileHover={{
            backgroundColor: "hsla(0, 100%, 51%, 0.86)",
          }}
          style={{ backgroundColor: "hsla(37, 89%, 52%, 0.9)" }}
          className=" 
          text-white 
           w-[20%] h-[2.3rem] rounded-[12px] m-4"
          type="submit"
        >
          SUBMIT
        </motion.button>
      </form>
      <Order items={items} handleRemove={handleRemove} />
    </section>
  );
}
